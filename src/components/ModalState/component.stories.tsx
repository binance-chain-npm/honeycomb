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
  title: React.ReactNode;
  content: React.ReactNode;
}

const scenario: Scenario = {
  variant: 'warning',
  title: 'warning',
  content:
    'Results feedback description. It can correctly guide users to understand the feedback results and select the next operation.',
};

export const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <ModalState open={show} onClose={() => setShow(false)} data-testid="MyModal">
        <ModalState.Icon variant={scenario.variant}></ModalState.Icon>
        <ModalState.Title>{scenario.title}</ModalState.Title>
        <ModalState.Content>{scenario.content}</ModalState.Content>
      </ModalState>
    </>
  );
};
