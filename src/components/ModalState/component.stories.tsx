import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { ModalState } from '.';

export default {
  title: `${Sections.Elements}/ModalState`,
};

export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <ModalState
        open={show}
        onClose={() => setShow(false)}
        variant="warning"
        title="Warning"
        content="Results feedback description. It can correctly guide users to understand the feedback results and select the next operation."
        data-testid="MyModal"
      >
        <Button variant="primary" onClick={() => setShow(false)}>
          I understand
        </Button>
      </ModalState>
    </>
  );
};
