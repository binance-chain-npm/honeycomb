import { useMemo } from 'react';

import { CandleType } from '../../types';

export const useCandles = ({
  width,
  caliber,
  candlesParam,
  candleIndexDelta,
}: {
  width: number;
  caliber: number;
  candleIndexDelta: number;
  candlesParam: CandleType[];
}) => {
  return useMemo(() => {
    const maxCandleCount = Math.ceil(width / caliber) + 1; // One extra candle to avoid blank areas in the chart
    const minCandleCount = Math.ceil(width / caliber) - 1; // One fewer candle to avoid clipping on the left end of the chart

    const minCandleIndexDelta = 0;
    const maxCandleIndexDelta = candlesParam.length - minCandleCount;

    const firstCandleIndex = (() => {
      const value = candlesParam.length - candleIndexDelta - maxCandleCount + 1;
      return value >= 0 ? value : 0;
    })();

    const lastCandleIndex = (() => {
      if (firstCandleIndex > 0) return firstCandleIndex + maxCandleCount;
      // Returns 2 fewer candles so that the last candle on the left side is not clipped.
      return firstCandleIndex + minCandleCount;
    })();

    const candles = candlesParam.slice(firstCandleIndex, lastCandleIndex);

    return { minCandleIndexDelta, maxCandleIndexDelta, candles };
  }, [caliber, width, candlesParam, candleIndexDelta]);
};
