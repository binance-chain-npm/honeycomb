import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { Orientation, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    children: React.ReactNode;
    orientation: Orientation;
  };

export const Component = ({
  children,
  orientation,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ orientation }), [orientation]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      <Context.Provider value={context}>{children}</Context.Provider>
    </Styled>
  );
};

Component.displayName = 'PanelControl';
