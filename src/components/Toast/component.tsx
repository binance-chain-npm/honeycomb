import React from 'react';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Icon as ToastIcon } from './Icon';
import { Styled, Left, Right } from './styled';

export type Props = Testable & {
  children: React.ReactNode;
  icon: React.ReactNode;
};

export const Component = ({ children, icon, 'data-testid': testId }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Styled data-testid={buildTestId()}>
      <Left>
        <ToastIcon icon={icon} />
      </Left>
      <Right>{children}</Right>
    </Styled>
  );
};

Component.displayName = 'Toast';

Component.Left = Left;
Component.Right = Right;
