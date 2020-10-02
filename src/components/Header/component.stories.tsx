import React from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
};

const dropdown = [
  {
    target: 'Item 1',
  },
  {
    target: 'Item 2',
  },
  {
    target: 'Item 3',
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
        <div style={{ display: 'flex', letterSpacing: '0.1em' }}>
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
          target: <>Left Item&nbsp;<Badge variant="primary">Badge</Badge></>,
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
          isStyled: true,
        },
        {
          target: 'Dropdown Item',
          children: dropdown,
        },
      ]}
    />
  </Card>
);
