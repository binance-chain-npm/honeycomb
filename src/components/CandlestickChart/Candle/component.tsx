import React, { useMemo } from 'react';
import { ScaleLinear } from 'd3-scale';
import { useTheme } from 'styled-components';

import { CandleType } from '../types';

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
  const x = caliber * index + 0.5 * caliber;
  return (
    <>
      <line
        x1={x}
        x2={x}
        y1={scaleY(high)}
        y2={scaleY(low)}
        stroke={close > open ? theme.honeycomb.color.buy.normal : theme.honeycomb.color.sell.normal}
        strokeWidth={1}
      />
    </>
  );
};

Component.displayName = 'Candle';
