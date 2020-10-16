import React from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';

import { Styled } from './styled';

export type Props = Testable & {
  size?: number;
};

export const Component = ({ size, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  return <Styled {...otherProps} size={size} data-testid={buildTestId()} />;
};

Component.displayName = 'Steps.Connector';
