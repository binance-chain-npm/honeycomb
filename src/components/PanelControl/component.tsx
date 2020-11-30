import React from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Orientation, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    children: React.ReactNode;
    orientation: Orientation;
  };

export const Component = ({
  orientation,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()} />;
};

Component.displayName = 'PanelControl';
