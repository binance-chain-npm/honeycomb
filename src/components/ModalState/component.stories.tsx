import React from 'react';

import { Sections } from '../../modules/sections';

import { Variant } from './styled';

import { ModalState } from '.';

export default {
  title: `${Sections.Elements}/ModalState`,
};

const scenario = {
  variant: 'warning' as Variant,
  name: 'Warning',
  description:
    'Results feedback description. It can correctly guide users to understand the feedback results and select the next operation.',
  children: null as React.ReactNode,
};

export const Default = () => (
  <ModalState
    open={true}
    data-testid="MyModal"
    variant={scenario.variant}
    title={scenario.name}
    description={scenario.description}
  >
    {scenario.children}
  </ModalState>
);
