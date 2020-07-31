import React from 'react';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { ModalState } from '.';

export default {
  title: `${Sections.Elements}/ModalState`,
};

const scenario = {
  name: 'Warning',
  description: 'Some description to guide users to understand this warning.',
  children: null as React.ReactNode,
};

export const Default = () => (
  <ModalState
    open={true}
    data-testid="MyModal"
    icon={<ModalState.Icon.Warning />}
    title={scenario.name}
    description={scenario.description}
  >
    {scenario.children}
  </ModalState>
);

export const WithCustomIcon = () => (
  <ModalState
    open={true}
    data-testid="MyModal"
    title={scenario.name}
    description={scenario.description}
    icon={<Icon.Tick />}
  />
);
