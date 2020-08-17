import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { ABSTRACT_AVATAR_COLORS } from '../internal/avatar-colors';

import { Svg, TextContainer, Container } from './styled';
import { Square } from './Square';

export type Props = Testable & {
  value: string;
  initial?: string;
  className?: string;
};

export const Component = ({ 'data-testid': testId, value, initial, className }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);
  const bgColor = useMemo(() => {
    const index = Number.parseInt(hash.split('')[0], 16) % ABSTRACT_AVATAR_COLORS.length;
    return ABSTRACT_AVATAR_COLORS[index];
  }, [hash]);

  return (
    <Container className={className} data-testid={buildTestId()}>
      <Svg viewBox="0 0 15 15">
        <rect x="0" y="0" width="15" height="15" fill={bgColor} />
        <Square values={values} startIndex={0} />
        <Square values={values} startIndex={4} />
        <Square values={values} startIndex={8} />
        <Square values={values} startIndex={12} />
        <Square values={values} startIndex={16} />
      </Svg>
      {!!initial && <TextContainer>{initial[0]}</TextContainer>}
    </Container>
  );
};

Component.displayName = 'AbstractAvatar';
