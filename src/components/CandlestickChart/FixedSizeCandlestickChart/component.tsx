import React, { useMemo, useRef, useEffect } from 'react';
import throttle from 'lodash.throttle';

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

  const candles = useMemo(() => {
    const candleCount = Math.ceil(width / caliber) + 1; // An extra candle is always added to avoid blank areas in the chart
    const firstCandleIndex = (() => {
      const value = candlesParam.length - candleIndexDelta - candleCount + 1;
      return value >= 0 ? value : 0;
    })();
    const lastCandleIndex = (() => {
      if (firstCandleIndex > 0) return firstCandleIndex + candleCount;
      // Returns 2 fewer candles so that the last candle on the left side is not clipped.
      return firstCandleIndex + candleCount - 2;
    })();

    return candlesParam.slice(firstCandleIndex, lastCandleIndex);
  }, [candlesParam, caliber, candleIndexDelta, width]);

  /** Used to ensure that the chart is "aligned to the right". */
  const offset = useMemo(() => width - caliber * candles.length, [width, caliber, candles.length]);
  const { scaleWidth, scaleY } = useScaleFunctions({ candles, width, height });
  const scrollRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const listener = throttle((evt: WindowEventMap['wheel']) => {
      if (!element.contains(evt.target as Node)) return;

      const newValue = (() => {
        const rawDiff = evt.deltaX / caliber;
        const sign = Math.sign(rawDiff);
        const diff = Math.ceil(Math.abs(rawDiff)) * sign;

        const result = candleIndexDelta - diff;
        const max = candlesParam.length - candles.length + 1;

        if (result < 0 && diff > 0) return 0;
        if (result > max && diff < 0) return max;

        return result;
      })();

      onDataScrolled?.({ candleIndexDelta: newValue });
    }, 50);

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [caliber, onDataScrolled, candleIndexDelta, candles.length, candlesParam.length]);

  return (
    <Svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} ref={scrollRef}>
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
