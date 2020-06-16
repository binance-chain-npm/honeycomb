import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  title: `${Sections.Elements}|Modal`,
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);

export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal">
        {items}
      </Modal>
    </>
  );
};

export const NoScroll = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Modal.Body disableScroll>{items}</Modal.Body>
    </Modal>
  );
};

export const NoPadding = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Modal.Body disableScroll withoutPadding={true}>
        {items}
      </Modal.Body>
    </Modal>
  );
};
