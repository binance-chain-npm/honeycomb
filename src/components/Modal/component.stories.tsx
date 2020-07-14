import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  title: `${Sections.Elements}/Modal`,
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);
export const Behaviour = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal" title="A title">
        {items}
      </Modal>
    </>
  );
};

export const WithTitle = () => (
  <Modal open={true} data-testid="MyModal" title="A title">
    {items}
  </Modal>
);

export const WithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" title="A title" position="bottom">
    {items}
  </Modal>
);

export const SmallWithTitle = () => (
  <Modal open={true} data-testid="MyModal" title="A title">
    Just a line
  </Modal>
);

export const SmallWithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" title="A title" position="bottom">
    Just a line
  </Modal>
);

export const WithoutTitle = () => (
  <Modal open={true} data-testid="MyModal">
    {items}
  </Modal>
);
