import React from 'react';

import { Sections } from '../../modules/sections';

import { CandlestickChart } from './';

export default {
  title: `${Sections.Charts}|CandlestickChart`,
};

export const Default = () => <CandlestickChart width={300} height={200} />;
