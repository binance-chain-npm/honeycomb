import React from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Styled, LeftContainer, Logo, Left, Right } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    logo?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
  };

export const Component = ({ logo, left, right, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo data-testid={buildTestId('logo')}>{logo}</Logo>}
        {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
      </LeftContainer>
      {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
    </Styled>
  );
};

Component.displayName = 'Header';

Component.Left = Left;
Component.Right = Right;
