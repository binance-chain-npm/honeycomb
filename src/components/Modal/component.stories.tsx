import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  title: `${Sections.Elements}|Modal`,
};

export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal">
        {new Array(200).fill(null).map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </Modal>
    </>
  );
};
