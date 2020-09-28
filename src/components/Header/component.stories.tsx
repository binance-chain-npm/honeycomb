import React from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
};

const dropdown = (
  <Header.Dropdown target="Dropdown Item">
    <Header.Dropdown.Item>Item 1</Header.Dropdown.Item>
    <Header.Dropdown.Item>Item 2</Header.Dropdown.Item>
    <Header.Dropdown.Divider />
    <Header.Dropdown.Item>Item 3</Header.Dropdown.Item>
  </Header.Dropdown>
);

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
      left={
        <>
          <Header.Item>Left Item</Header.Item>
          {dropdown}
        </>
      }
      right={
        <>
          <Header.Item>Right Item</Header.Item>
          {dropdown}
        </>
      }
    />
  </Card>
);
