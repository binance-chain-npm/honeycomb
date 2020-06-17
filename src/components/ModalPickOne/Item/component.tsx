import React from 'react';

import { Testable } from '../../../modules/test-ids';

import { Container } from './styled';

export type Props = Testable & {
  searchAs: string | string[];
  children?: React.ReactNode;
};

export const Component = ({ 'data-testid': testId, children }: Props) => {
  return <Container data-testid={testId}>{children}</Container>;
};

Component.displayName = 'ModalPickOne.Item';
