import React from 'react';

import { Testable } from '../../../modules/test-ids';

import { Description } from './styled';

export type Props = Testable & {
  children?: React.ReactNode;
};

export const Component = ({ children }: Props) => {
  return <Description>{children}</Description>;
};

Component.displayName = 'ModalState.Description';
