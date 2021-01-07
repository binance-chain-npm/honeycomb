import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { SIZES, useWindowSize } from '../../internal/useWindowSize';
import { Space } from '../../Space';

import { Styled, Logo, LogoSmall, StyledBadge } from './styled';

export type Props = Testable & {
  text?: React.ReactNode;
};

export const Component = ({ text, 'data-testid': testId }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const { width } = useWindowSize();

  const isSm = useMemo(() => width < SIZES.md, [width]);

  return (
    <Styled data-testid={buildTestId()}>
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
