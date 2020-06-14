import React, { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

import { CandleType } from './types';
import { Candle } from './Candle';
import { CALIBER_MIN, CALIBER_MAX } from './contants';

export type Props = {
  width: number;
  height: number;
  candles: CandleType[];
  caliber: number;
  candleIndexDelta?: number;
};

export const Component = ({
  width,
  height,
  candles: candlesParam,
  caliber,
  candleIndexDelta = 0,
}: Props) => {
  if (process.env.NODE_ENV !== 'production') {
    if (caliber % 2 !== 1) {
      throw new Error(`"caliber" should never be an even number, but got "${caliber}"`);
    }

    if (caliber < CALIBER_MIN) {
      throw new Error(`"caliber" cannot be lower than ${CALIBER_MIN}, but got "${caliber}"`);
    }

    if (caliber > CALIBER_MAX) {
      throw new Error(`"caliber" cannot be lower than ${CALIBER_MAX}, but got "${caliber}"`);
    }
  }

  const candleCount = useMemo(() => width / caliber, [width, caliber]);
  const firstCandleIndex = useMemo(() => {
    const value = candlesParam.length - candleIndexDelta - candleCount + 1;
    return value >= 0 ? value : 0;
  }, [candlesParam, candleIndexDelta, candleCount]);
  const candles = useMemo(
    () => candlesParam.slice(firstCandleIndex, firstCandleIndex + candleCount),
    [candlesParam, firstCandleIndex, candleCount],
  );

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
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ backgroundColor: 'white' }}
    >
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
