import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Svg, TextContainer, Container } from './styled';

export type Props = Testable & {
  value: string;
  initial?: string;
};

type SquareProps = { color: string; values: number[]; startIndex: number };

const Square = ({ color, values, startIndex }: SquareProps) => {
  const x = values[startIndex];
  const y = values[startIndex + 1];
  const size = values[startIndex + 2];
  const angle = useMemo(() => (values[startIndex + 3] / 15) * 360, [values, startIndex]);

  return (
    <g transform={`rotate(${angle} ${(x + size) / 2} ${(y + size) / 2})`}>
      <rect x={x} y={y} width={size} height={size} fill={color} />
    </g>
  );
};

export const Component = ({ 'data-testid': testId, value, initial: initialParam }: Props) => {
  const theme = useTheme();
  const buildTestId = useBuildTestId(testId);
  const initial = initialParam ?? value[0];
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);

  return (
    <Container data-testid={buildTestId()}>
      <Svg viewBox="0 0 15 15" fill="red">
        <Square values={values} startIndex={0} color={theme.honeycomb.color.primary.normal} />
        <Square values={values} startIndex={4} color={theme.honeycomb.color.success.normal} />
        <Square values={values} startIndex={8} color={theme.honeycomb.color.danger.normal} />
      </Svg>
      <TextContainer>{initial}</TextContainer>
    </Container>
  );
};

Component.displayName = 'Button';
