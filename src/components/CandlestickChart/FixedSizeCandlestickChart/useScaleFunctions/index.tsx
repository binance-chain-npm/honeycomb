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

  return useMemo(() => ({ scaleY, scaleWidth }), [scaleY, scaleWidth]);
};
