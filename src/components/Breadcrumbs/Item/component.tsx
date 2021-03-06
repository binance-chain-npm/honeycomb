import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

import { Context as ItemContext } from './context';
import { Styled, Caret, Label } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> & Testable;

export const Component = ({ children, 'data-testid': testId, ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: testId ? parentTestId : undefined,
  });
  const { active } = useContext(ItemContext);

  return (
    <Styled {...otherProps} active={active} data-testid={buildTestId(testId)}>
      <Label>{children}</Label>
      {!active && <Caret />}
    </Styled>
  );
};

Component.displayName = 'Breadcrumbs.Item';
