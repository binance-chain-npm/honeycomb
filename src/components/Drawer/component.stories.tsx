import React, { useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';

import { Drawer } from './';

export default {
  component: Drawer,
  decorators,
  title: `${Sections.Elements}/Drawer`,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="btn-open">
        {open ? (
          <Icon.EyeBlocked fontSize={GoldLight.honeycomb.size.increased} />
        ) : (
          <Icon.Eye fontSize={GoldLight.honeycomb.size.increased} />
        )}
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} data-testid="drawer">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </Drawer>
    </>
  );
};
