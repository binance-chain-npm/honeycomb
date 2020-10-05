import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Badge } from '../../Badge';
import { sizes, useWindowSize } from '../../internal/useWindowSize';
import { Space } from '../../Space';

import { Styled, Logo, LogoSmall } from './styled';

export type Props = Testable & {
  text?: React.ReactNode;
};

export const Component = ({ text, 'data-testid': testId }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const { width, height } = useWindowSize();

  const isSm = useMemo(() => width < sizes.md || height < sizes.sm, [width, height]);

  return (
    <Styled data-testid={buildTestId()}>
      {isSm ? <LogoSmall data-testid={buildTestId('logo-small')} /> : <Logo data-testid={buildTestId('logo')} />}
      {text && (
        <>
          <Space size="tiny" />
          <Badge variant="primary" data-testid={buildTestId('badge')}>{text}</Badge>
        </>
      )}
    </Styled>
  );
};

Component.displayName = 'Header.Logo';
