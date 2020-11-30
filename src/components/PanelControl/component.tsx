import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { Orientation, Shape, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    children: React.ReactNode;
    orientation: Orientation;
    shape?: Shape;
  };

export const Component = ({
  children,
  orientation,
  shape = 'fill',
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ orientation, shape }), [orientation, shape]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      <Context.Provider value={context}>{children}</Context.Provider>
    </Styled>
  );
};

Component.displayName = 'PanelControl';
