import React from 'react';

import { Testable } from '../../../modules/test-ids';

import { Title } from './styled';

export type Props = Testable & {
  children?: React.ReactNode;
};

export const Component = ({ children }: Props) => {
  return <Title>{children}</Title>;
};

Component.displayName = 'ModalState.Title';
