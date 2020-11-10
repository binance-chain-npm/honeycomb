import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { ModalState } from './';

export default {
  title: `${Sections.Elements}/ModalState`,
};

const scenario = {
  name: 'Warning',
  description: 'Some description to guide users to understand this warning.',
  children: null as React.ReactNode,
};

export const Success = () => (
  <ModalState
    open={true}
    data-testid="modal-state"
    icon={<ModalState.Icon.Success />}
    title={scenario.name}
    description={scenario.description}
  >
    {scenario.children}
  </ModalState>
);

export const Warning = () => (
  <ModalState
    open={true}
    data-testid="modal-state"
    icon={<ModalState.Icon.Warning />}
    title={scenario.name}
    description={scenario.description}
  >
    {scenario.children}
  </ModalState>
);

export const Danger = () => (
  <ModalState
    open={true}
    data-testid="modal-state"
    icon={<ModalState.Icon.Danger />}
    title={scenario.name}
    description={scenario.description}
  >
    {scenario.children}
  </ModalState>
);

export const WithCustomIcon = () => (
  <ModalState
    open={true}
    data-testid="modal-state"
    title={scenario.name}
    description={scenario.description}
    icon={<Icon.Tick />}
  />
);

export const Behaviour = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="open-btn">
        Show
      </Button>
      <ModalState
        open={open}
        onClose={() => setOpen(false)}
        data-testid="modal-state"
        title={scenario.name}
        description={scenario.description}
        icon={<Icon.Tick />}
      />
    </>
  );
};
