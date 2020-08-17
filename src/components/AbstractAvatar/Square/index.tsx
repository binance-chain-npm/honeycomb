import React, { useMemo } from 'react';

import { ABSTRACT_AVATAR_COLORS } from '../../internal/avatar-colors';

export type Props = { values: number[]; startIndex: number };

export const Square = ({ values, startIndex }: Props) => {
  const x = values[startIndex];
  const y = values[startIndex + 1];
  const size = values[startIndex + 2];
  const angle = useMemo(() => (values[startIndex + 3] / 15) * 360, [values, startIndex]);
  const color = useMemo(() => {
    const index = values[startIndex] % ABSTRACT_AVATAR_COLORS.length;
    return ABSTRACT_AVATAR_COLORS[index];
  }, [values, startIndex]);

  return (
    <g transform={`rotate(${angle} ${(x + size) / 2} ${(y + size) / 2})`}>
      <rect x={x} y={y} width={size} height={size} fill={color} />
    </g>
  );
};
