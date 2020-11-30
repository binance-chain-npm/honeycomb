import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

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
  const { orientation } = useContext(Context);

  return (
    <Styled
      {...otherProps}
      orientation={orientation}
      padding={padding}
      selected={!!selected}
      data-testid={buildTestId()}
    />
  );
};

Component.displayName = 'PanelControl.Item';
