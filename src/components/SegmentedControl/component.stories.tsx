import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { sizes } from './styled';

import { SegmentedControl } from './';

export default {
  component: SegmentedControl,
  title: `${Sections.Elements}/SegmentedControl`,
};

export const Default = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      {sizes.map((size) => (
        <div key={size} style={{ marginBottom: '1em' }}>
          <h3>{size}</h3>
          <SegmentedControl
            size={size}
            selectedIndex={selectedIndex}
            onChange={({ selectedIndex }) => setSelectedIndex(selectedIndex)}
            data-testid={`segmented-control.${size}`}
          >
            <>BTC</>
            <span>BNB</span>
            <i>USDT</i>
          </SegmentedControl>
        </div>
      ))}
      <h3>disabled</h3>
      <SegmentedControl onChange={alert} selectedIndex={selectedIndex} disabled>
        <span>BTC</span>
        <span>BNB</span>
        <span>USDT</span>
      </SegmentedControl>
    </>
  );
};
