import React, { useMemo } from 'react';

import { CandleType } from '../types';

import { Candle } from './Candle';
import { useScaleFunctions } from './useScaleFunctions';
import { assertCaliberIsValid } from './assertCaliberIsValid';
import { Svg } from './styled';

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
  assertCaliberIsValid({ caliber });

  const candles = useMemo(() => {
    const candleCount = Math.ceil(width / caliber) + 1; // An extra candle is always added to avoid blank areas in the chart
    const firstCandleIndex = (() => {
      const value = candlesParam.length - candleIndexDelta - candleCount + 1;
      return value >= 0 ? value : 0;
    })();

    return candlesParam.slice(firstCandleIndex, firstCandleIndex + candleCount);
  }, [candlesParam, caliber, candleIndexDelta, width]);

  /** Used to ensure that the chart is "aligned to the right". */
  const offset = useMemo(() => width - caliber * candles.length, [width, caliber, candles.length]);
  const { scaleWidth, scaleY } = useScaleFunctions({ candles, width, height });

  return (
    <Svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
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
