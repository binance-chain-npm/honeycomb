import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { TestIdContext } from '../context';

import { Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    children?: React.ReactNode;
  };

export const Component = ({ target, children, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Styled {...otherProps} data-testid={buildTestId(otherProps['data-testid'])}>
      {children}
    </Styled>
  );
};

Component.displayName = 'Header.Item';
