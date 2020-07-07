import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  title: `${Sections.Elements}/Modal`,
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);
const title = 'List Token';
export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal" title={title}>
        <Modal.Scroll>
          <Modal.Body>{items}</Modal.Body>
        </Modal.Scroll>
      </Modal>
    </>
  );
};

export const NoScroll = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Modal.Body>{items}</Modal.Body>
    </Modal>
  );
};

export const NoBody = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Modal.Scroll>{items}</Modal.Scroll>
    </Modal>
  );
};

export const Bare = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      {items}
    </Modal>
  );
};
