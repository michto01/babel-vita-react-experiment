//import * as dotenv from 'dotenv';
//dotenv.config();

import React, { useState } from 'react';
import {
  Page,
  Navbar,
  Link,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Icon,
  Toast,
} from 'konsta/react';

import {
  AudioConference,
  LiveKitRoom,
  ConnectionState,
  ParticipantLoop,
  ParticipantName,
  ControlBar,
  LayoutContextProvider,
} from '@livekit/components-react';

import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';

import axios from 'axios';

import { HiCog, HiPlay, HiStop, HiTranslate } from 'react-icons/hi';
import { ImHeadphones } from 'react-icons/im';
import { randomUUID } from 'crypto';

const inputStyle: any = {
  bgMaterial: '',
};

export default function Channels() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);

  const [toastLeftOpened, setPlayerToastOpen] = useState(false);
  const [channel, setChannel] = useState('');
  const [roomAccess, setRoomAccess] = useState('');
  const [roomPublisher, setRoomPublisher] = useState('');

  const createListenerId = async () => {
    const uuid = await axios.get('/api/uuid');
    return 'listener@' + uuid;
  };

  const openToast = async (setter: any) => {
    // close other toast

    setPlayerToastOpen(false);
    setter(true);
  };

  const accessChannel = async (room: string) => {
    const token = await axios.post('/api/channels', {
      identity: createListenerId(),
    });

    const rooms = await axios.post('/api/rooms');
    console.log(rooms);

    setRoomAccess(token.data.token);
  };

  const publishChannel = async (room: string) => {
    const token = await axios.post('/api/publish');

    setRoomPublisher(token.data.token);
  };

  return (
    <Page>
      <Navbar
        title="Babel"
        subtitle="Mobile Assistive Listening"
        className="top-0 sticky font-black"
        medium={size === 'Medium'}
        large={size === 'Large'}
        transparent={isTransparent}
        left={
          <Icon
            ios={<HiTranslate className="w-8 h-8 mx-2" />}
            material={<HiTranslate className="w-8 h-8 mx-2" />}
          />
        }
        right={
          <Link navbar>
            <Link
              onClick={() => {
                publishChannel('czech');
              }}
            >
              <Icon
                ios={<HiCog className="w-8 h-8" />}
                material={<HiCog className="w-8 h-8" />}
              />
            </Link>
          </Link>
        }
      />
      {/*subnavbar={
          <Block>
            {/*<List strongIos insetIos>
              <ListInput
                outline
                label="Search Channel"
                floatingLabel
                type="text"
                color={inputStyle}
                placeholder="123456"
                className={`mb-2 py-4`}
              />
            </List>* /}
          </Block>
        }*/}
      {/*left={<NavbarBackLink text="Back" onClick={() => history.back()} />}*/}

      <div className="relative">
        <BlockTitle withBlock={false}>Active Channels</BlockTitle>
        <List dividers={false}>
          <ListItem
            link
            className={`bg-md-light-surface-1 shadow-md`}
            title="Čeština"
            after={
              <Link
                onClick={() => {
                  openToast(setPlayerToastOpen);
                  setChannel('czech');
                  accessChannel('czech');
                }}
              >
                <Icon
                  className={`text-md-light-primary mx-2`}
                  ios={<HiPlay className="w-8 h-8" />}
                  material={<HiPlay className="w-8 h-8" />}
                />
              </Link>
            }
            media={
              <Icon
                className={`text-md-light-primary`}
                ios={<ImHeadphones className="w-8 h-8" />}
                material={<ImHeadphones className="w-8 h-8" />}
              />
            }
          />

          <ListItem
            title="English"
            link
            className={`bg-md-light-surface-1 shadow-md my-2`}
            after={
              <Link
                onClick={() => {
                  openToast(setPlayerToastOpen);
                  setChannel('english');
                }}
              >
                <Icon
                  className={`text-md-light-primary mx-2`}
                  ios={<HiPlay className="w-8 h-8" />}
                  material={<HiPlay className="w-8 h-8" />}
                />
              </Link>
            }
            media={
              <Icon
                className={`text-md-light-primary`}
                ios={<ImHeadphones className="w-8 h-8" />}
                material={<ImHeadphones className="w-8 h-8" />}
              />
            }
          />

          <ListItem
            title="Pусский"
            link
            className={`bg-md-light-surface-1 shadow-md my-2`}
            after={
              <Link
                onClick={() => {
                  openToast(setPlayerToastOpen);
                  setChannel('russian');
                }}
              >
                <Icon
                  className={`text-md-light-primary mx-2`}
                  ios={<HiPlay className="w-8 h-8" />}
                  material={<HiPlay className="w-8 h-8" />}
                />
              </Link>
            }
            media={
              <Icon
                className={`text-md-light-primary`}
                ios={<ImHeadphones className="w-8 h-8" />}
                material={<ImHeadphones className="w-8 h-8" />}
              />
            }
          />
        </List>

        <BlockTitle withBlock={false}>LiveKit</BlockTitle>
        <Block>
          <div className="roomContainer">
            <LiveKitRoom
              serverUrl={`wss://babel.livekit.cloud`}
              token={roomPublisher}
              connect={true}
              audio={true}
              video={false}
              screen={false}
              onError={(error) => {
                console.log(error);
              }}
            >
              {/*<AudioConference />*/}
              <LayoutContextProvider>
                {/*onPinChange={handlePinStateChange}*/}
                <ConnectionState />
                <ParticipantLoop>
                  <ParticipantName />
                </ParticipantLoop>
                <ControlBar
                  controls={{ camera: false, screenShare: false, chat: false }}
                />
              </LayoutContextProvider>
            </LiveKitRoom>
          </div>
        </Block>

        <Toast
          position="center"
          opened={toastLeftOpened}
          button={
            <Button
              rounded
              clear
              small
              inline
              onClick={() => setPlayerToastOpen(false)}
            >
              <Icon
                ios={<HiStop className="w-8 h-8" />}
                material={<HiStop className="w-8 h-8" />}
              />
            </Button>
          }
        >
          <div className="shrink">
            Now playing: {channel} {/*roomAccess*/}
            <LiveKitRoom
              serverUrl={`wss://babel.livekit.cloud`}
              token={roomAccess}
              connect={true}
              audio={true}
              video={false}
              screen={false}
              onError={(error) => {
                console.log(error);
              }}
            >
              <AudioConference />
            </LiveKitRoom>
          </div>
        </Toast>
      </div>
    </Page>
  );
}
