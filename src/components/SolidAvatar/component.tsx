import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { TextContainer, Container } from './styled';

export type Props = Testable & {
  value: string;
  initial?: string;
  className?: string;
};

const COLORS = [
  '#f0b90b',
  '#d0980b',
  '#8d6207',
  '#6a4c0c',
  '#2ed191',
  '#02c076',
  '#0f8f62',
  '#1e644e',
  '#fc6e75',
  '#f84960',
  '#d9304e',
  '#982a42',
  '#82c1fc',
  '#328dfd',
  '#1773eb',
  '#1d53ab',
];

export const Component = ({ 'data-testid': testId, value, initial, className }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const bgColor = useMemo(() => {
    const index = Number.parseInt(hash.split('')[0], 16) % COLORS.length;
    return COLORS[index];
  }, [hash]);

  return (
    <Container className={className} data-testid={buildTestId()} bgColor={bgColor}>
      {!!initial && <TextContainer>{initial[0]}</TextContainer>}
    </Container>
  );
};

Component.displayName = 'SolidAvatar';
