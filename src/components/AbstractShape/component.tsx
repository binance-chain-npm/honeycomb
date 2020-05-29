import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Svg, TextContainer, Container } from './styled';

export type Props = Testable & {
  value: string;
  initial?: string;
};

type SquareProps = { hash: string; values: number[]; startIndex: number };

const Square = ({ hash, values, startIndex }: SquareProps) => {
  const x = values[startIndex];
  const y = values[startIndex + 1];
  const size = values[startIndex + 2];
  const angle = values[startIndex + 3];
  const color = `#${hash.substring(startIndex, startIndex + 6)}`;

  return (
    <g transform={`rotate(${(angle / 16) * 360} ${(x + size) / 2} ${(y + size) / 2})`}>
      <rect x={x} y={y} width={size} height={size} fill={color} />
    </g>
  );
};

export const Component = ({ 'data-testid': testId, value, initial: initialParam }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const initial = initialParam ?? value[0];
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);

  return (
    <Container data-testid={buildTestId()}>
      <Svg viewBox="0 0 15 15" fill="red" style={{ background: `#${hash.substring(1, 7)}` }}>
        <Square hash={hash} values={values} startIndex={0} />
        <Square hash={hash} values={values} startIndex={4} />
        <Square hash={hash} values={values} startIndex={8} />
      </Svg>
      <TextContainer>{initial}</TextContainer>
    </Container>
  );
};

Component.displayName = 'Button';
