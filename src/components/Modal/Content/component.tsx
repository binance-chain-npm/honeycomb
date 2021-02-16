import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Context } from '../context';
import { Padding } from '../styled';

import { Scroll, Content } from './styled';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  padding?: Padding;
};

export const Component = ({ padding = 'normal', ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: parentTestId ? `${parentTestId}.content` : undefined,
  });

  return (
    <Scroll>
      <Content {...otherProps} padding={padding} data-testid={buildTestId()} />
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
