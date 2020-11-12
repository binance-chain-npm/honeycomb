import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { Dropdown } from './';

export default {
  component: Dropdown,
  title: `${Sections.Elements}/Dropdown`,
};

export const Bare = () => {
  return <Dropdown target="Dropdown">Some content...</Dropdown>;
};

export const WithHelpers = () => {
  return (
    <Dropdown
      target={<Dropdown.DefaultTarget>Dropdown</Dropdown.DefaultTarget>}
      data-testid="dropdown"
    >
      <Dropdown.Item data-testid="item1" onClick={() => alert('item1')}>
        Item 1
      </Dropdown.Item>
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

export const WithToggleHandler = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      target={
        <Button variant="secondary">
          {open ? (
            <Icon.EyeBlocked fontSize={GoldLight.honeycomb.size.increased} />
          ) : (
            <Icon.Eye fontSize={GoldLight.honeycomb.size.increased} />
          )}
        </Button>
      }
      onToggle={() => setOpen((value) => !value)}
    >
      <Dropdown.Item>Some content...</Dropdown.Item>
    </Dropdown>
  );
};

export const Selectable = () => {
  const [selected, setSelected] = useState<{ index: number; value: React.ReactNode }>({
    index: -1,
    value: 'Dropdown',
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
