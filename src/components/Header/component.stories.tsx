import React, { useMemo } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SIZES, useWindowSize } from '../internal/useWindowSize';

import { docs } from './docs';

import { Header } from './';

export default {
  component: Header,
  decorators,
  title: `${Sections.Elements}/Header`,
  parameters: {
    docs: docs,
  },
};

const dropdown = [
  {
    element: (
      <>
        Item 1&nbsp;<Badge variant="primary">Badge</Badge>
      </>
    ),
    label: 'Item Group 1',
    showBorder: true,
    onClick: () => action('clicked')(),
  },
  {
    element: 'Item 2',
    label: 'Item Group 2',
  },
  {
    element: 'Item 3',
  },
  {
    element: 'Disabled Item',
    disabled: true,
  },
];

export const Default = () => (
  <Header
    logo={<Header.Logo />}
    left={[
      {
        element: 'Item 1',
      },
      {
        element: 'Item 2',
      },
      {
        element: 'Item 3',
      },
    ]}
    right={[
      {
        element: 'Disabled Item',
        disabled: true,
      },
    ]}
  />
);

type State = React.ComponentPropsWithoutRef<typeof Header.Account>['state'];

export const Account: Story = () => {
  const account = ({ state }: { state: State }) => (
    <Header.Account
      icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}
      children={[
        {
          element: 'Account Item 1',
        },
        {
          element: 'Account Item 2',
        },
        {
          element: 'Account Item 3',
        },
      ]}
      pre="Connect"
      post={{
        address: 'bnb1...ur8v',
        network: 'Binance Smart Chain Test Network',
      }}
      pending="Pending"
      state={state}
      data-testid="account"
    />
  );

  return (
    <Header
      logo={<Header.Logo />}
      nonCollapsible={[
        {
          element: (
            <Header.Account
              icon={<Icon.WalletConnectColor />}
              pre={null}
              post={{
                address: 'bnb1...ur8v',
              }}
              pending={null}
              state="post"
            />
          ),
          styled: true,
        },
        {
          element: account({ state: 'pre' }),
          styled: true,
        },
        {
          element: account({ state: 'pending' }),
          styled: true,
        },
        {
          element: account({ state: 'post' }),
          styled: true,
        },
      ]}
      data-testid="header"
    />
  );
};

export const WithDropdownItems = () => (
  <Header
    logo={<Header.Logo />}
    left={[
      {
        element: 'Left Dropdown Item',
        children: dropdown,
      },
    ]}
    right={[
      {
        element: 'Right Dropdown Item',
        children: dropdown,
      },
    ]}
  />
);

export const WithNonCollapsibleItems = () => {
  const { width } = useWindowSize();

  const isMd = useMemo(() => width < SIZES.lg, [width]);
  const isSm = useMemo(() => width < SIZES.md, [width]);

  return (
    <>
      <Header
        logo={<Header.Logo />}
        left={[
          {
            element: 'Left Item',
          },
        ]}
        right={[
          {
            element: 'Right Item',
          },
        ]}
        nonCollapsible={[
          {
            element: 'Non-Collapsible',
            'data-testid': 'non-collapsible',
          },
          {
            element: 'Collapse on MD',
            collapseOn: 'md',
            'data-testid': 'non-collapsible.md',
          },
          {
            element: 'Collapse on SM',
            collapseOn: 'sm',
            'data-testid': 'non-collapsible.sm',
          },
        ]}
        data-testid="header"
      />
      <div style={{ marginTop: '1em' }}>
        Current window size: {isMd ? (isSm ? 'SM' : 'MD') : 'LG'}
      </div>
    </>
  );
};

export const WithComplexItems = () => (
  <Header
    logo={<Header.Logo text="Project Name" data-testid="header.logo" />}
    left={[
      {
        element: 'Item',
      },
      {
        element: 'Dropdown Item',
        children: dropdown,
      },
    ]}
    right={[
      {
        element: (
          <>
            <span style={{ marginRight: '0.5em' }}>Link</span>
            <Icon.Link />
          </>
        ),
        htmlTag: 'a',
        href: '#',
        target: '_blank',
      },
      {
        element: <Badge variant="primary">Unstyled Item</Badge>,
        styled: true,
      },
    ]}
    nonCollapsible={[
      {
        element: 'Non-Collapsible Item',
      },
      {
        element: (
          <Button variant="primary" shape="fit">
            Button on LG
          </Button>
        ),
        styled: true,
        collapseOn: 'md',
      },
    ]}
    data-testid="header"
  />
);
