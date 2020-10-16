import React from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Orientation } from '../styled';

import { Styled } from './styled';

export type Props = Testable & {
  size?: number;
  orientation: Orientation;
};

export const Component = ({ size, orientation, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <Styled {...otherProps} size={size} orientation={orientation} data-testid={buildTestId()} />
  );
};

Component.displayName = 'Steps.Connector';
