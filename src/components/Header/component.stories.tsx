import React from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Button } from '../Button';
import { Card } from '../Card';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
};

const dropdown = [
  {
    target: <Dropdown.Item>Item 1</Dropdown.Item>,
  },
  {
    target: <Dropdown.Item disabled>Item 2</Dropdown.Item>,
  },
  {
    target: <Dropdown.Divider />,
  },
  {
    target: <Dropdown.Item>Item 3</Dropdown.Item>,
  },
];

const style: React.CSSProperties = {
  color: GoldLight.honeycomb.color.primary.normal,
  display: 'flex',
  alignItems: 'center',
};

export const Default = () => (
  <Card variant="bare">
    <Header
      logo={
        <div style={{ display: 'flex' }}>
          <Icon.BinanceChain
            style={{ fontSize: '2.5em' }}
            color={GoldLight.honeycomb.color.primary.normal}
          />
          <Space size="tiny" />
          <div style={{ ...style, fontWeight: 600 }}>BINANCE</div>
          <Space size="micro" />
          <div style={style}>CHAIN</div>
        </div>
      }
      left={[
        {
          target: 'Left Item',
          htmlTag: 'a',
          href: '#',
        },
        {
          target: 'Dropdown Item',
          children: dropdown,
        },
      ]}
      right={[
        {
          target: 'Right Item',
          htmlTag: 'button',
        },
        {
          target: (
            <Button variant="primary" shape="fit">
              Button
            </Button>
          ),
          htmlTag: 'button',
        },
        {
          target: 'Dropdown Item',
          children: dropdown,
        },
      ]}
    />
  </Card>
);
