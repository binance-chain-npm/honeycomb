import React from 'react';

import { Sections } from '../../modules/sections';

import { Dropdown } from './';

export default {
  title: `${Sections.Elements}/Dropdown`,
};

export const Bare = () => {
  return (
    <Dropdown target="Click here!" data-testid="MyDropdown">
      Some content
    </Dropdown>
  );
};

export const WithHelpers = () => {
  return (
    <Dropdown
      target={<Dropdown.DefaultTarget>Click here!</Dropdown.DefaultTarget>}
      data-testid="MyDropdown"
    >
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item variant="accent">Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isSelected>Selected item</Dropdown.Item>
      <Dropdown.Item disabled>Disabled item</Dropdown.Item>
      <Dropdown.Item variant="accent" disabled>
        Disabled accent item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item isInteractive={false}>Non-interactive item</Dropdown.Item>
    </Dropdown>
  );
};
