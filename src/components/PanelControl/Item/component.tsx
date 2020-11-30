import React from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';

import { Size, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    selected?: boolean;
    padding?: Size;
  };

export const Component = ({
  selected,
  padding = 'normal',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Styled {...otherProps} padding={padding} selected={!!selected} data-testid={buildTestId()} />
  );
};

Component.displayName = 'PanelControl.Item';
