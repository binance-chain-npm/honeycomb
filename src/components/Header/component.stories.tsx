import React from 'react';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useWindowSize } from '../internal/useWindowSize';

import { docs } from './docs';
import { Account } from './docs/Account';

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

export const WithAccount = () => (
  <Header
    logo={<Header.Logo />}
    nonCollapsible={[
      {
        element: <Account state="post" />,
        styled: true,
      },
    ]}
    data-testid="header"
  />
);

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
  const { isSm, isMd } = useWindowSize();

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
