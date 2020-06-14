import React, { useMemo, useRef } from 'react';
import { useDrag, usePinch, useGesture } from 'react-use-gesture';

import { CandleType } from '../types';

import { Candle } from './Candle';
import { useScaleFunctions } from './useScaleFunctions';
import { assertCaliberIsValid } from './assertCaliberIsValid';
import { Svg } from './styled';
import { useCandles } from './useCandles';
import { CALIBER_MAX, CALIBER_MIN } from './contants';

export type Props = {
  width: number;
  height: number;
  candles: CandleType[];
  caliber: number;
  candleIndexDelta?: number;
  onDataScrolled?: (params: { candleIndexDelta: number }) => void;
  onCaliberChanged?: (params: { caliber: number }) => void;
};

export const Component = ({
  width,
  height,
  candles: candlesParam,
  caliber,
  candleIndexDelta = 0,
  onDataScrolled,
  onCaliberChanged,
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

  const domTarget = useRef(null);

  const originalCandleIndexDelta = useRef(candleIndexDelta);

  const isTouchScreen = 'ontouchstart' in document.documentElement;
  const bind = useGesture(
    {
      onWheel: ({
        event,
        delta: [deltaX, deltaY],
        direction: [directionHorizontal, directionVertical],
      }) => {
        event?.preventDefault();
        event?.stopPropagation();

        const isHorizontal = Math.abs(directionHorizontal) >= Math.abs(directionVertical);
        const deltaRaw = isHorizontal ? deltaX : deltaY;

        const sign = Math.sign(isHorizontal ? -directionHorizontal : -directionVertical);
        const minDelta = 1 * sign;
        const delta = (() => {
          if (deltaRaw < caliber / 2) return minDelta;
          if (deltaRaw < caliber) return minDelta * 2;
          return deltaRaw;
        })();

        const newValue = (() => {
          const diff = Math.floor(Math.abs(delta)) * sign;

          const result = candleIndexDelta + diff;
          if (result < minCandleIndexDelta && diff < 0) return minCandleIndexDelta;
          if (result > maxCandleIndexDelta && diff > 0) return maxCandleIndexDelta;

          return result;
        })();

        onDataScrolled?.({ candleIndexDelta: newValue });
      },
      onDragStart: () => {
        originalCandleIndexDelta.current = candleIndexDelta;
      },
      onDrag: ({ event, movement: [mx] }) => {
        event?.preventDefault();
        event?.stopPropagation();

        const newValue = (() => {
          const sign = Math.sign(mx);
          const diff = Math.floor(Math.abs(mx / caliber)) * sign;

          const result = originalCandleIndexDelta.current + diff;
          if (result < minCandleIndexDelta && diff < 0) return minCandleIndexDelta;
          if (result > maxCandleIndexDelta && diff > 0) return maxCandleIndexDelta;

          return result;
        })();

        onDataScrolled?.({ candleIndexDelta: newValue });
      },
      onPinch: ({ event, movement: [dx] }) => {
        event?.preventDefault();
        event?.stopPropagation();

        const sign = Math.sign(dx);
        const minDelta = 2 * sign;
        const rawDeltaAbs = Math.abs(dx / 20);
        const delta = (() => {
          if (rawDeltaAbs < caliber) return minDelta;
          return rawDeltaAbs * sign;
        })();

        const newValue = (() => {
          const result = sign > 0 ? Math.floor(caliber + delta) : Math.ceil(caliber + delta);

          if (result > CALIBER_MAX) return CALIBER_MAX;
          if (result < CALIBER_MIN) return CALIBER_MIN;

          if (result % 2 !== 1) return result - 1;
          return result;
        })();

        onCaliberChanged?.({ caliber: newValue });
      },
    },
    {
      domTarget,
      eventOptions: { passive: false },
      drag: { axis: 'x' },
      wheel: { enabled: !isTouchScreen },
    },
  );

  return (
    <Svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...bind()}
      ref={domTarget}
    >
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
