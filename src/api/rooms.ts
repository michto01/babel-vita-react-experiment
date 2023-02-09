import * as dotenv from 'dotenv';
import { Handler } from 'vite-plugin-mix';

import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';
import { randomUUID } from 'crypto';
import bodyParser from 'body-parser';

dotenv.config();
//const app = express();

const roomManager = new RoomServiceClient(
  `https://${process.env.LIVEKIT}`,
  process.env.APIKEY,
  process.env.SECRET
);

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
    const opts = {
      name: room,
      // timeout in seconds
      emptyTimeout: 10 * 60 * 60,
      maxParticipants: 20,
    };
    await roomManager.createRoom(opts);
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
    const opts = {
      name: room,
      // timeout in seconds
      emptyTimeout: 10 * 60 * 60,
      maxParticipants: 20,
    };
    await roomManager.createRoom(opts);
  }

  return token;
};

const parser = bodyParser.json();

export const handler: Handler = async (req, res, next) => {
  if (req.method == 'POST') {
    if (req.path === '/api/channels') {
      //parser(req, res, next);

      //ares.use(bodyParser.json());
      //bodyParser()
      //const { id, who } = req.params;

      const { id, who } = { id: 'jo', who: 'czech' };

      return res.end(
        JSON.stringify({
          token: (await createRoom(id, who)).toJwt(),
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
        uuid: randomUUID,
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
