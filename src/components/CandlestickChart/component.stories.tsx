import React from 'react';

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

export const Default = () => {
  return <CandlestickChart width={300} height={200} candles={candles} />;
};
