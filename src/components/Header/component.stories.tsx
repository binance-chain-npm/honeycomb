import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { DefaultTarget } from '../internal/DefaultTarget';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
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

const nonCollapsible = [
  {
    element: <DefaultTarget style={{ padding: '0 1em' }}>Non-Collapsible Item</DefaultTarget>,
    styled: true,
  },
];

export const Default = () => (
  <Header
    logo={<Header.Logo />}
    left={[
      {
        element: 'Left Item 1',
      },
      {
        element: 'Left Item 2',
      },
      {
        element: 'Left Item 3',
      },
    ]}
    right={[
      {
        element: 'Right Item 1',
      },
      {
        element: 'Right Item 2',
      },
      {
        element: 'Right Item 3',
      },
    ]}
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

export const WithNonCollapsibleItems = () => (
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
    nonCollapsible={nonCollapsible}
  />
);

export const WithComplexItems = () => (
  <Header
    logo={<Header.Logo text="Project" data-testid="logo" />}
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
            <span style={{ marginRight: '0.5em' }}>Multiple Items</span>
            <Icon.Link />
          </>
        ),
        htmlTag: 'a',
        href: '#',
        target: '_blank',
      },
      {
        element: (
          <Button variant="primary" shape="fit" onClick={() => action('clicked')()}>
            Button
          </Button>
        ),
        htmlTag: 'button',
        styled: true,
      },
      {
        element: 'Dropdown Item',
        children: dropdown,
      },
    ]}
    nonCollapsible={nonCollapsible}
    data-testid="header"
  />
);
