import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { Orientation, Size, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    children: React.ReactNode;
    orientation: Orientation;
    padding?: Size;
  };

export const Component = ({
  children,
  orientation,
  padding = 'none',
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ orientation, padding }), [orientation, padding]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      <Context.Provider value={context}>{children}</Context.Provider>
    </Styled>
  );
};

Component.displayName = 'PanelControl';
