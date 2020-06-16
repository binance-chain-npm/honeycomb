import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { TestIdContext } from '../context';

import { Scroll } from './styled';

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({ children, className }: Props) => {
  const testId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(testId);

  return (
    <Scroll data-testid={buildTestId('scroll-container')} className={className}>
      {children}
    </Scroll>
  );
};

Component.displayName = 'Modal.Scroll';
