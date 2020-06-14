import React, { useState } from 'react';
import { createGlobalStyle as css } from 'styled-components';

import { Sections } from '../../modules/sections';

import data from './data.json';

import { CandlestickChart, Candle } from './';

export default {
  title: `${Sections.Charts}|CandlestickChart`,
};

const asFloat = (value: string | number) =>
  typeof value === 'number' ? value : Number.parseFloat(value);

const candles: Candle[] = data.map((it) => ({
  open: asFloat(it[1]),
  high: asFloat(it[2]),
  low: asFloat(it[3]),
  close: asFloat(it[4]),
}));

const NoBodyMargin = css`
  body {
    margin: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export const Default = () => {
  const [candleIndexDelta, setCandleIndexDelta] = useState(0);
  const [caliber, setCaliber] = useState(7);
  return (
    <>
      <NoBodyMargin />
      <CandlestickChart
        candles={candles}
        caliber={caliber}
        candleIndexDelta={candleIndexDelta}
        onDataScrolled={({ candleIndexDelta }) => setCandleIndexDelta(candleIndexDelta)}
        onCaliberChanged={({ caliber }) => setCaliber(caliber)}
      />
    </>
  );
};
