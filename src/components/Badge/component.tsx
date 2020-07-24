import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Badge, Variant } from './styled';

export type Props = Testable & {
  variant: Variant;
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({ variant, 'data-testid': testId, className, children }: Props) => (
  <Badge className={className} data-testid={testId} variant={variant}>
    {children}
  </Badge>
);

Component.displayName = 'Badge';
