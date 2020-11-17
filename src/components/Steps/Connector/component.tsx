import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

import { Styled } from './styled';

export type Props = Testable & {
  size?: number;
};

export const Component = ({ size, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { orientation } = useContext(Context);

  return (
    <Styled {...otherProps} size={size} orientation={orientation} data-testid={buildTestId()} />
  );
};

Component.displayName = 'Steps.Connector';
