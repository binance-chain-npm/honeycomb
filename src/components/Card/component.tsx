import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Container, Position } from './styled';

export type Props = Testable & {
  children?: React.ReactNode;
  className?: string;
  position?: Position;
};

export const Component = ({
  children,
  className,
  'data-testid': testId,
  position = 'center',
}: Props) => (
  <Container className={className} data-testid={testId} position={position}>
    {children}
  </Container>
);

Component.displayName = 'Card';
