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
        className="top-0 sticky"
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
        subnavbar={
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
            </List>*/}
          </Block>
        }
      />
      {/*left={<NavbarBackLink text="Back" onClick={() => history.back()} />}*/}

      <div className="relative">
        <Card header="Card header" footer="Card footer">
          Card with header and footer. Card headers are used to display card
          titles and footers for additional information or just for custom
          actions.
          <List strongIos insetIos>
            <ListInput
              outline
              label="Search Channel"
              floatingLabel
              type="text"
              color={inputStyle}
              placeholder="123456"
              clearButton
            />
          </List>
        </Card>

        <BlockTitle withBlock={false}>Active Channels</BlockTitle>
        <Card
          header={
            <div>
              <div className={`flex`}>
                <Icon
                  ios={<ImHeadphones className="w-8 h-8" />}
                  material={<ImHeadphones className="w-8 h-8" />}
                />
                <BlockHeader>Test</BlockHeader>
              </div>
            </div>
          }
          footer={
            <Link>
              <Icon
                ios={<HiPlay className="w-8 h-8" />}
                material={<HiPlay className="w-8 h-8" />}
              />
              Play
            </Link>
          }
        >
          Card with header and footer. Card headers are used to display card
          titles and footers for additional information or just for custom
          actions.
        </Card>

        <Block strong inset className="shadow-md translucent">
          <p>Test</p>
          <Button>Play</Button>
        </Block>

        <Block strong inset className="shadow-md translucent">
          <p>Test</p>
          <Button>Play</Button>
        </Block>

        <Block strong inset className="shadow-md translucent">
          <p>Test</p>
          <Button>Play</Button>
        </Block>

        {/*<BlockTitle>Size</BlockTitle--> 
        <BlockHeader>
          Medium and Large will collapse to usual size on page scroll
        </BlockHeader>
        <List strong inset>
          {['Default', 'Medium', 'Large'].map((v) => (
            <ListItem
              key={v}
              label
              title={v}
              after={
                <Radio
                  component="div"
                  value={v}
                  checked={size === v}
                  onChange={() => setSize(v)}
                />
              }
            />
          ))}
        </List>

        <BlockTitle>Transparent</BlockTitle>

        <BlockHeader>
          When navbar is transparent, its title and background will become
          visible on page scroll
        </BlockHeader>
        <List strong inset>
          <ListItem
            label
            title="Transparent"
            after={
              <Toggle
                component="div"
                checked={isTransparent === true}
                onChange={() => setIsTransparent(!isTransparent)}
              />
            }
          />
        </List>

        <Block strong inset className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempore ratione unde accusantium distinctio nulla quia numquam earum
            odio, optio, nisi rem deserunt. Molestiae delectus, ut assumenda
            numquam magni enim.
          </p>
          <p>
            Architecto molestias cum dolor dolorem provident consequuntur
            incidunt sunt fugiat tenetur odio, recusandae placeat rem veniam.
            Voluptates, repellendus odit, magni nesciunt, optio laborum
            asperiores repudiandae consectetur suscipit ab cupiditate eum.
          </p>
          <p>
            Aliquam, iste accusamus deleniti temporibus exercitationem neque
            perferendis optio, blanditiis quisquam molestias perspiciatis cumque
            harum tenetur veniam. Dolorum fugit doloribus est, deserunt,
            eligendi, quaerat quidem itaque tempore laborum non illum?
          </p>
          <p>
            Rerum magni sunt quis veniam, dolor ratione saepe ducimus tempore
            voluptatum porro quod commodi? Aperiam laudantium deleniti totam
            dolorum qui accusantium iste saepe facere optio, soluta maxime
            mollitia deserunt cumque.
          </p>
          <p>
            Iusto tempore quis provident, saepe illum ex ipsum cupiditate
            explicabo ratione unde facere nemo delectus harum, blanditiis eius
            sit asperiores nam. Aut cupiditate est tempore officia, perspiciatis
            esse asperiores repudiandae?
          </p>
          <p>
            Consequuntur itaque harum eos vero, reiciendis dolorum iure non
            earum molestias tenetur sint enim, maxime recusandae ad perferendis
            repudiandae! Sit, quos exercitationem beatae numquam laborum nobis
            natus. Obcaecati, ea inventore.
          </p>
          <p>
            Fugit culpa labore sapiente excepturi reiciendis, nulla, nihil neque
            ut veritatis quis quibusdam dolorum? Voluptatibus animi officia
            perspiciatis doloremque cum voluptatem, quia ratione modi vero,
            consequatur ipsum, praesentium quibusdam amet?
          </p>
          <p>
            Laudantium nihil sint nam placeat, nemo rerum ipsam explicabo iusto
            dolores molestiae expedita eos consequuntur ut architecto
            consequatur soluta ad maiores voluptatem tenetur in velit. Minima
            quia molestiae nobis voluptatibus.
          </p>
          <p>
            Expedita soluta quia inventore et placeat id exercitationem quisquam
            eligendi est eius sapiente quo, cum nesciunt mollitia, sit veniam
            ducimus tempora culpa adipisci commodi in autem nihil voluptatem
            corporis? Perspiciatis.
          </p>
          <p>
            Molestias, est? Eligendi vero distinctio voluptatem cumque id
            voluptatibus, officia minima repellendus sit illo tempora labore
            provident? Eum tenetur consectetur quae, in facilis autem ipsam
            doloribus voluptate vitae suscipit nobis.
          </p>
          <p>
            Obcaecati optio iste hic, soluta minus ullam, perferendis pariatur
            non possimus autem nostrum libero sapiente. Corporis quo cum iusto
            exercitationem velit. Non beatae eveniet asperiores ipsa
            consequuntur temporibus sapiente earum!
          </p>
          <p>
            Temporibus, omnis. Excepturi dolorum expedita laudantium quasi quod
            id adipisci, esse, nam atque in, incidunt ex ab distinctio
            repellendus beatae voluptatem alias odit illum quis. Illo numquam
            voluptatibus error voluptatum!
          </p>
        </Block>
        */}
      </div>
    </Page>
  );
}
