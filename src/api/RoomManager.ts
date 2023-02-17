import * as dotenv from 'dotenv';
import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';
import { randomUUID } from 'crypto';

dotenv.config();

const roomManager = new RoomServiceClient(
  `https://${process.env.LIVEKIT}`,
  process.env.APIKEY,
  process.env.SECRET
);

export const makeRoom = async (name: string, opts: RoomOptions | null) => {
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
