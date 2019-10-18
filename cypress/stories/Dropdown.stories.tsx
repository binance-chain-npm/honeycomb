import React from 'react';

import { Dropdown } from '../../src/components/Dropdown';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}|Dropdown`,
};

export const Default = () => {
  return (
    <Dropdown
      target={<Dropdown.DefaultTarget>Click here!</Dropdown.DefaultTarget>}
      data-testid="Dropdown"
    >
      <Dropdown.Item data-testid="item1" onClick={() => alert('item1')}>
        Item 1
      </Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
    </Dropdown>
  );
};
