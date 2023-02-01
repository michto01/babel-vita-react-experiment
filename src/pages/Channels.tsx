import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Link,
  Block,
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  ListInput,
  Radio,
  Toggle,
  Button,
  Icon,
  Card,
  Toolbar,
  Toast,
} from 'konsta/react';

import { HiCog, HiPlay, HiStop, HiTranslate } from 'react-icons/hi';
import { ImHeadphones } from 'react-icons/im';
const inputStyle: any = {
  bgMaterial: '',
};

export default function Channels() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);

  const [toastLeftOpened, setPlayerToastOpen] = useState(false);
  const [channel, setChannel] = useState('');

  const openToast = (setter: any) => {
    // close other toast
    setPlayerToastOpen(false);
    setter(true);
  };

  return (
    <Page>
      <Navbar
        title="Babel"
        subtitle="Mobile Assistive Listening"
        className="top-0 sticky "
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
            <Icon
              ios={<HiCog className="w-8 h-8" />}
              material={<HiCog className="w-8 h-8" />}
            />
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
          <div className="shrink">Now playing: {channel}</div>
        </Toast>
      </div>
    </Page>
  );
}
