import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { ListItem } from '../ListItem';

import { Drawer } from './';

export default {
  component: Drawer,
  title: `${Sections.Elements}/Drawer`,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="btn-open">
        {open ? 'Close' : 'Open'}
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} data-testid="drawer">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </Drawer>
    </>
  );
};
