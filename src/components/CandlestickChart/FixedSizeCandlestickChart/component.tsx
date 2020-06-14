import React, { useMemo } from 'react';
import { useDrag } from 'react-use-gesture';

import { CandleType } from '../types';

import { Candle } from './Candle';
import { useScaleFunctions } from './useScaleFunctions';
import { assertCaliberIsValid } from './assertCaliberIsValid';
import { Svg } from './styled';
import { useCandles } from './useCandles';

export type Props = {
  width: number;
  height: number;
  candles: CandleType[];
  caliber: number;
  candleIndexDelta?: number;
  onDataScrolled?: (params: { candleIndexDelta: number }) => void;
};

export const Component = ({
  width,
  height,
  candles: candlesParam,
  caliber,
  candleIndexDelta = 0,
  onDataScrolled,
}: Props) => {
  assertCaliberIsValid({ caliber });

  const { candles, maxCandleIndexDelta, minCandleIndexDelta } = useCandles({
    caliber,
    candleIndexDelta,
    candlesParam,
    width,
  });

  /** Used to ensure that the chart is "aligned to the right". */
  const offset = useMemo(() => width - caliber * candles.length, [width, caliber, candles.length]);
  const { scaleWidth, scaleY } = useScaleFunctions({ candles, width, height });

  const bind = useDrag(
    ({ delta: [mx] }) => {
      const newValue = (() => {
        const rawDiff = mx / (caliber / 5);
        const sign = Math.sign(rawDiff);
        const diff = Math.floor(Math.abs(rawDiff)) * sign;

        const result = candleIndexDelta + diff;
        if (result < minCandleIndexDelta && diff < 0) return minCandleIndexDelta;
        if (result > maxCandleIndexDelta && diff > 0) return maxCandleIndexDelta;

        return result;
      })();

      onDataScrolled?.({ candleIndexDelta: newValue });
    },
    { axis: 'x' },
  );

  return (
    <Svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...bind()}>
      {candles.map((it, index) => (
        <Candle
          {...it}
          key={index}
          index={index}
          caliber={caliber}
          scaleY={scaleY}
          scaleWidth={scaleWidth}
          offset={offset}
        />
      ))}
    </Svg>
  );
};

Component.displayName = 'FixedSizeCandlestickChart';
