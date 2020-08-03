import React from 'react';

import { Sections } from '../../modules/sections';

import { sizes } from './styled';

import { SegmentedControl } from './';

export default {
  component: SegmentedControl,
  title: `${Sections.Elements}/SegmentedControl`,
};

export const Default = () => (
  <>
    {sizes.map((size) => (
      <div key={size} style={{ marginBottom: '1em' }}>
        <h3>{size}</h3>
        <SegmentedControl options={['BNB', 'BTC', 'USDT']} size={size} onChange={console.log} />
      </div>
    ))}
    <h3>disabled</h3>
    <SegmentedControl options={['BNB', 'BTC', 'USDT']} onChange={alert} disabled />
  </>
);
