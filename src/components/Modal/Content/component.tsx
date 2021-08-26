import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Context } from '../context';

import { Scroll, Content } from './styled';

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({ ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: parentTestId ? `${parentTestId}.content` : undefined,
  });

  return (
    <Scroll>
      <Content {...otherProps} data-testid={buildTestId()} />
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
