import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Dialog } from './';

export default {
  title: `${Sections.Elements}/ModalDialog`,
};

export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Show
      </Button>
      <Dialog
        open={show}
        onClose={() => setShow(false)}
        variant="success"
        title="Success"
        content="Results feedback description. It can correctly"
      ></Dialog>
    </>
  );
};
