import * as dotenv from 'dotenv';
import type { Handler } from 'vite-plugin-mix';

import { AccessToken } from 'livekit-server-sdk';

dotenv.config();
//const app = express();

const createRoom = (user: string, room: string) => {
  let token = new AccessToken(process.env.APIKEY, process.env.SECRET, {
    identity: user,
  });

  token.addGrant({
    room: room,
    roomList: true,
    roomJoin: true,
    roomAdmin: false,
    roomRecord: false,
    hidden: true,
    canPublish: false,
    canPublishData: false,
    canSubscribe: true,
  });

  return token;
};

export const handler: Handler = (req, res, next) => {
  if (req.path === '/api/channels') {
    //const { id, who } = req.params;

    const { id, who } = { id: 'jo', who: 'czech' };

    return res.end(
      JSON.stringify({
        token: createRoom(id, who).toJwt(),
      })
    );
  }

  next();
};
