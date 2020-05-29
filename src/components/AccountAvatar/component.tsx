import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Svg, TextContainer, Container } from './styled';
import { Square } from './Square';

export type Props = Testable & {
  value: string;
  initial?: string;
  className?: string;
};

export const Component = ({
  'data-testid': testId,
  value,
  initial: initialParam,
  className,
}: Props) => {
  const theme = useTheme();
  const buildTestId = useBuildTestId(testId);
  const initial = initialParam ?? value[0];
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);

  return (
    <Container className={className} data-testid={buildTestId()}>
      <Svg viewBox="0 0 15 15" fill="red">
        <Square values={values} startIndex={0} color={theme.honeycomb.color.primary.normal} />
        <Square values={values} startIndex={4} color={theme.honeycomb.color.success.normal} />
        <Square values={values} startIndex={8} color={theme.honeycomb.color.danger.normal} />
      </Svg>
      <TextContainer>{initial[0]}</TextContainer>
    </Container>
  );
};

Component.displayName = 'AccountAvatar';
