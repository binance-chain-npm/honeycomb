import React, { useMemo } from 'react';

export type Props = { color: string; values: number[]; startIndex: number };

export const Square = ({ color, values, startIndex }: Props) => {
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
