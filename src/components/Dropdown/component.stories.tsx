import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { Dropdown } from './';

export default {
  component: Dropdown,
  title: `${Sections.Elements}/Dropdown`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Bare = () => {
  return <Dropdown target="Click here!">Some content</Dropdown>;
};

export const WithHelpers = () => {
  return (
    <Dropdown
      target={<Dropdown.DefaultTarget>Click here!</Dropdown.DefaultTarget>}
      data-testid="dropdown"
    >
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item htmlTag="a">Item 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item variant="accent">Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item selected>Selected item</Dropdown.Item>
      <Dropdown.Item disabled>Disabled item</Dropdown.Item>
      <Dropdown.Item variant="accent" disabled>
        Disabled accent item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item interactive={false}>Non-interactive item</Dropdown.Item>
    </Dropdown>
  );
};

export const Selectable = () => {
  const [selected, setSelected] = useState<{ index: number; value: React.ReactNode }>({
    index: -1,
    value: 'Click here!',
  });

  return (
    <Dropdown target={<Dropdown.DefaultTarget>{selected.value}</Dropdown.DefaultTarget>}>
      {new Array(5).fill(null).map((_, index) => (
        <Dropdown.Item
          key={index}
          data-testid={`${index}`}
          onClick={() =>
            setSelected({
              index,
              value: `Option ${index + 1}`,
            })
          }
          selected={selected.index === index}
        >
          Option {index + 1}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
