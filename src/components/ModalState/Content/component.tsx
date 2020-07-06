import React from 'react';

import { Testable } from '../../../modules/test-ids';

import { Content } from './styled';

export type Props = Testable & {
  children?: React.ReactNode;
};

export const Component = ({ children }: Props) => {
  return <Content>{children}</Content>;
};

Component.displayName = 'ModalState.Content';
