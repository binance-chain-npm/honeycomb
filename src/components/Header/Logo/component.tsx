import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Badge } from '../../Badge';
import { Space } from '../../Space';

import { Styled, Logo } from './styled';

export type Props = Testable & {
  text?: React.ReactNode;
};

export const Component = ({ text }: Props) => {
  return (
    <Styled>
      <Logo />
      {text && (
        <>
          <Space size="tiny" />
          <Badge variant="primary">{text}</Badge>
        </>
      )}
    </Styled>
  );
};

Component.displayName = 'Header.Logo';
