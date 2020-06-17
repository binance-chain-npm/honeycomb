import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { TestIdContext } from '../context';

import { Body } from './styled';

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({ children, className }: Props) => {
  const testId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(testId);

  return (
    <Body data-testid={buildTestId('body')} className={className}>
      {children}
    </Body>
  );
};

Component.displayName = 'Modal.Body';
