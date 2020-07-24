import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Badge, Variant, Transparent } from './styled';

export type Props = Testable & {
  variant?: Variant;
  transparent?: Transparent;
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({
  variant = 'success',
  'data-testid': testId,
  className,
  children,
  transparent = 'success',
}: Props) => (
  <Badge className={className} data-testid={testId} variant={variant} transparent={transparent}>
    {children}
  </Badge>
);

Component.displayName = 'Card';
