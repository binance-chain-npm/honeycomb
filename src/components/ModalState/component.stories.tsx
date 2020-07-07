import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Variant } from './styled';

import { ModalState } from '.';

export default {
  title: `${Sections.Elements}/ModalState`,
};

export interface Scenario {
  variant: Variant;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const scenario: Scenario = {
  variant: 'warning',
  name: 'Warning',
  description:
    'Results feedback description. It can correctly guide users to understand the feedback results and select the next operation.',
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
        data-testid="MyModal"
        variant={scenario.variant}
        name={scenario.name}
        description={scenario.description}
      >
        {scenario.children}
      </ModalState>
    </>
  );
};
