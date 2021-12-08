import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { useWindowSize } from '../../internal/useWindowSize';
import { Space } from '../../Space';

import { Styled, Logo, LogoSmall, StyledBadge } from './styled';

export type Props = Testable & {
  className?: string;
  text?: React.ReactNode;
};

export const Component = ({ text, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { isSm } = useWindowSize();

  return (
    <Styled data-testid={buildTestId()} {...otherProps}>
      {isSm ? (
        <Logo data-testid={buildTestId('logo-sm')} />
      ) : (
        <LogoSmall data-testid={buildTestId('logo')} />
      )}
      {text && (
        <>
          <Space size="tiny" />
          <StyledBadge variant="primary" data-testid={buildTestId('badge')}>
            {text}
          </StyledBadge>
        </>
      )}
    </Styled>
  );
};

Component.displayName = 'Header.Logo';
