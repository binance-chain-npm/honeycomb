import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Container, Position, Variant } from './styled';

export type Props = React.AllHTMLAttributes<HTMLElement> &
  Testable & {
    position?: Position;
    variant?: Variant;
  };

export const Component = ({
  children,
  className,
  'data-testid': testId,
  position = 'center',
  variant = 'default',
}: Props) => (
  <Container className={className} data-testid={testId} position={position} variant={variant}>
    {children}
  </Container>
);

Component.displayName = 'Card';
