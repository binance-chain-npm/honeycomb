import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { ModalState } from './';

export default {
  component: ModalState,
  title: `${Sections.Elements}/ModalState`,
};

const scenario = {
  name: 'Title',
  description: 'Some description...',
  children: null as React.ReactNode,
};

export const Default: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="open-btn">
        {open ? (
          <Icon.EyeBlocked fontSize={GoldLight.honeycomb.size.increased} />
        ) : (
          <Icon.Eye fontSize={GoldLight.honeycomb.size.increased} />
        )}
      </Button>
      <ModalState
        open={open}
        onClose={() => setOpen(false)}
        data-testid="modal-state"
        title={scenario.name}
        description={scenario.description}
        icon={<ModalState.Icon.Success />}
      />
    </>
  );
};
Default.decorators = decorators;

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
    icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}
  />
);
