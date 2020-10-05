import React from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { DefaultTarget } from '../internal/DefaultTarget';
import { Space } from '../Space';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
};

const dropdown = [
  {
    target: (
      <>
        Item 1&nbsp;<Badge variant="primary">Badge</Badge>
      </>
    ),
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

const logo = (
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
);

export const Default = () => (
  <Card variant="bare">
    <Header
      logo={logo}
      left={[
        {
          target: 'Left Item 1',
        },
        {
          target: 'Left Item 2',
        },
        {
          target: 'Left Item 3',
        },
      ]}
      right={[
        {
          target: 'Right Item 1',
        },
        {
          target: 'Right Item 2',
        },
        {
          target: 'Right Item 2',
        },
      ]}
    />
  </Card>
);

export const WithDropdownItems = () => (
  <Card variant="bare">
    <Header
      logo={logo}
      left={[
        {
          target: 'Left Dropdown Item',
          children: dropdown,
        },
      ]}
      right={[
        {
          target: 'Right Dropdown Item',
          children: dropdown,
        },
      ]}
    />
  </Card>
);

export const WithNonCollapsibleItems = () => (
  <Card variant="bare">
    <Header
      logo={logo}
      left={[
        {
          target: 'Left Item',
        },
      ]}
      right={[
        {
          target: 'Right Item',
        },
      ]}
      nonCollapsible={[
        {
          target: <DefaultTarget style={{ padding: '0 1em' }}>Non-Collapsible Item</DefaultTarget>,
          isStyled: true,
        },
      ]}
    />
  </Card>
);

export const WithComplexItems = () => (
  <Card variant="bare">
    <Header
      logo={logo}
      left={[
        {
          target: 'Item',
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
          target: (
            <>
              <span style={{ marginRight: '0.5em' }}>Multiple Items</span>
              <Icon.Link />
            </>
          ),
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
      nonCollapsible={[
        {
          target: <DefaultTarget style={{ padding: '0 1em' }}>Non-Collapsible Item</DefaultTarget>,
          isStyled: true,
        },
      ]}
      data-testid="header"
    />
  </Card>
);
