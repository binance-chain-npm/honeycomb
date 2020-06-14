import { useMemo } from 'react';
import { scaleLinear } from 'd3-scale';

import { CandleType } from '../../types';

export const useScaleFunctions = ({
  candles,
  height,
  width,
}: {
  candles: CandleType[];
  height: number;
  width: number;
}) => {
  return useMemo(() => {
    const values = candles.map((it) => [it.low, it.high]).flat();
    const min = Math.min(...values);
    const max = Math.max(...values);

    const scaleY = scaleLinear()
      .domain([min, max])
      .range([height, 0]);

    const scaleWidth = scaleLinear()
      .domain([0, max - min])
      .range([0, width]);

    return { scaleY, scaleWidth };
  }, [candles, height, width]);
};
