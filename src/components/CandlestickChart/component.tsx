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

  const scaleY = useMemo(
    () =>
      scaleLinear()
        .domain([min, max])
        .range([height, 0]),
    [min, max, height],
  );

  const scaleWidth = useMemo(
    () =>
      scaleLinear()
        .domain([0, max - min])
        .range([0, width]),
    [min, max, width],
  );

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
