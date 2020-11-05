import React, { useState } from 'react';

import { Button } from '../../src/components/Button';
import { Modal } from '../../src/components/Modal';
import { Sections } from '../modules/sections';

export default {
  title: `${Sections.Tests}/Modal`,
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);
export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="btn-open">
        Show
      </Button>
      <Modal open={show} data-testid="modal">
        <Modal.Header onClose={() => setShow(false)} title="A title" />
        <Modal.Content>{items}</Modal.Content>
      </Modal>
    </>
  );
};
