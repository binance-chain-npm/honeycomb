import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Variant } from '../styled';

import { SvgContainer } from './styled';

export type Props = Testable & {
  icon: Variant | React.ReactElement;
};

export const Component = ({ icon }: Props) => {
  return <SvgContainer>{icon}</SvgContainer>;
};

Component.displayName = 'ModalState.Icon';
