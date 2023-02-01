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
} from 'konsta/react';

//import { MdPerson, MdEmail, MdToday, MdFileUpload } from 'react-icons/md';
import { HiCog, HiPlay, HiTranslate } from 'react-icons/hi';
import { ImHeadphones } from 'react-icons/im';
const inputStyle: any = {
  bgMaterial: '',
};

export default function Channels() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);
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
              <Link>
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
              <Link>
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
              <Link>
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
      </div>
    </Page>
  );
}
