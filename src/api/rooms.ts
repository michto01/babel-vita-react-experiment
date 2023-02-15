import * as dotenv from 'dotenv';
import { Handler } from 'vite-plugin-mix';

import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';
import { randomUUID } from 'crypto';
import bodyParser from 'body-parser';
import { IncomingMessage } from 'http';

dotenv.config();
//const app = express();

const roomManager = new RoomServiceClient(
  `https://${process.env.LIVEKIT}`,
  process.env.APIKEY,
  process.env.SECRET
);

const customBodyParser = (req: IncomingMessage) =>
  new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk: string) => {
      data += chunk;
    });
    req.on('end', async () => {
      const body = JSON.parse(data);
      resolve(body);
    });
  });

const makeRoom = async (name: string, opts: RoomOptions | null) => {
  if (null == opts) {
    opts = {
      maxParticipants: 50,
      timeout: 10 * 60 * 60,
    };
  }

  const roomOpts = {
    name: name,
    emptyTimeout: opts.timeout,
    maxParticipants: opts.maxParticipants,
  };

  await roomManager.createRoom(roomOpts);
};

const publisherCreateRoom = async (user: string, room: string) => {
  let token = new AccessToken(process.env.APIKEY, process.env.SECRET, {
    identity: user,
    name: 'Translator',
  });

  token.addGrant({
    room: room,
    roomList: true,
    roomJoin: true,
    roomAdmin: true,
    roomRecord: false,
    hidden: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  });

  const rooms = await roomManager.listRooms();
  const isActive = rooms.filter((r) => r.name == room);

  if (!isActive.length) {
    await makeRoom(room, null);
  }

  return token;
};

const createRoom = async (user: string, room: string) => {
  let token = new AccessToken(process.env.APIKEY, process.env.SECRET, {
    identity: user,
    name: 'Listener',
  });

  token.addGrant({
    room: room,
    roomList: true,
    roomJoin: true,
    roomAdmin: false,
    roomRecord: false,
    hidden: true,
    canPublish: false,
    canPublishData: true,
    canSubscribe: true,
  });

  const rooms = await roomManager.listRooms();
  const isActive = rooms.filter((r) => r.name == room);

  if (!isActive.length) {
    await makeRoom(room, null);
  }

  return token;
};

export const handler: Handler = async (req, res, next) => {
  if (req.method == 'POST') {
    if (req.path === '/api/channels') {
      const body: any = await customBodyParser(req);
      const { identity, room } = body;
      const roomManager = await createRoom(identity, room);

      return res.end(
        JSON.stringify({
          token: roomManager.toJwt(),
        })
      );
    }

    if (req.path === '/api/publish') {
      const { id, who } = { id: 'translator', who: 'czech' };

      return res.end(
        JSON.stringify({
          token: (await publisherCreateRoom(id, who)).toJwt(),
        })
      );
    }
  }

  if (req.path === '/api/uuid') {
    return res.end(
      JSON.stringify({
        uuid: randomUUID(),
      })
    );
  }

  if (req.path === '/api/rooms') {
    return res.end(
      JSON.stringify({
        rooms: await roomManager.listRooms(),
      })
    );
  }

  next();
};
