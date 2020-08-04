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
    {sizes.map((size, index) => (
      <div key={size} style={{ marginBottom: '1em' }}>
        <h3>{size}</h3>
        <SegmentedControl size={size} selectedIndex={index} onChange={console.log}>
          <i>BTC</i>
          <span>BNB</span>
          <i>USDT</i>
        </SegmentedControl>
      </div>
    ))}
    <h3>disabled</h3>
    <SegmentedControl onChange={alert} selectedIndex={2} disabled>
      <span>BTC</span>
      <span>BNB</span>
      <span>USDT</span>
    </SegmentedControl>
  </>
);
