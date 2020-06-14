import React, { useMemo } from 'react';
import { ScaleLinear } from 'd3-scale';
import { useTheme } from 'styled-components';

import { CandleType } from '../types';
import { CANDLE_MARGIN } from '../contants';

export type Props = CandleType & {
  caliber: number;
  scaleY: ScaleLinear<number, number>;
  scaleWidth: ScaleLinear<number, number>;
  index: number;
};

export const Component = ({
  caliber,
  close,
  high,
  low,
  open,
  scaleWidth,
  scaleY,
  index,
}: Props) => {
  const theme = useTheme();
  const x = useMemo(() => caliber * index + 0.5 * caliber, [caliber, index]);
  const color = useMemo(
    () => (close > open ? theme.honeycomb.color.buy.normal : theme.honeycomb.color.sell.normal),
    [close, open, theme],
  );

  return (
    <>
      <line x1={x} x2={x} y1={scaleY(high)} y2={scaleY(low)} stroke={color} strokeWidth={1} />
      <rect
        x={caliber * index + CANDLE_MARGIN / 2}
        y={scaleY(Math.max(open, close))}
        width={caliber - CANDLE_MARGIN}
        height={scaleWidth(Math.max(open, close) - Math.min(open, close))}
        fill={color}
      />
    </>
  );
};

Component.displayName = 'Candle';
