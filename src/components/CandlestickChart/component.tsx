import React, { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

import { CandleType } from './types';
import { Candle } from './Candle';

export type Props = { width: number; height: number; candles: CandleType[] };

export const Component = ({ width, height, candles }: Props) => {
  const caliber = useMemo(() => width / candles.length, [width, candles]);
  const { min, max } = useMemo(() => {
    const values = candles.map((it) => [it.low, it.high]).flat();
    return { min: Math.min(...values), max: Math.max(...values) };
  }, [candles]);

  const scaleY = scaleLinear()
    .domain([min, max])
    .range([height, 0]);

  const scaleWidth = scaleLinear()
    .domain([0, max - min])
    .range([0, width]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {candles.map((it, index) => (
        <Candle
          {...it}
          key={index}
          index={index}
          caliber={caliber}
          scaleY={scaleY}
          scaleWidth={scaleWidth}
        />
      ))}
    </svg>
  );
};

Component.displayName = 'CandlestickChart';
