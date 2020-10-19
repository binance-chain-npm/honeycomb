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
    target: (
      <>
        Item 1&nbsp;<Badge variant="primary">Badge</Badge>
      </>
    ),
    label: 'Item Group 1',
    showBorder: true,
    onClick: () => action('clicked')(),
  },
  {
    target: 'Item 2',
    label: 'Item Group 2',
  },
  {
    target: 'Item 3',
  },
  {
    target: 'Disabled Item',
    disabled: true,
  },
];

const nonCollapsible = [
  {
    target: <DefaultTarget style={{ padding: '0 1em' }}>Non-Collapsible Item</DefaultTarget>,
    styled: true,
  },
];

export const Default = () => (
  <Header
    logo={<Header.Logo />}
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
        target: 'Right Item 3',
      },
    ]}
  />
);

export const WithDropdownItems = () => (
  <Header
    logo={<Header.Logo />}
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
);

export const WithNonCollapsibleItems = () => (
  <Header
    logo={<Header.Logo />}
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
    nonCollapsible={nonCollapsible}
  />
);

export const WithComplexItems = () => (
  <Header
    logo={<Header.Logo text="Project" data-testid="logo" />}
    left={[
      {
        target: 'Item',
        htmlTag: 'span',
        onClick: () => action('clicked')(),
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
          <Button variant="primary" shape="fit" onClick={() => action('clicked')()}>
            Button
          </Button>
        ),
        htmlTag: 'button',
        styled: true,
      },
      {
        target: 'Dropdown Item',
        children: dropdown,
      },
    ]}
    nonCollapsible={nonCollapsible}
    data-testid="header"
  />
);
