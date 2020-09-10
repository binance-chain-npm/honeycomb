import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { sizes } from '../internal/Size';
import { Space } from '../Space';

import { SegmentedControl } from './';

export default {
  component: SegmentedControl,
  title: `${Sections.Elements}/SegmentedControl`,
};

export const Default = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {sizes.map((size, index) => (
        <div key={size} style={{ marginBottom: '1em' }}>
          <h3>{size}</h3>
          <SegmentedControl
            size={size}
            selectedIndex={selected[index]}
            onChange={({ selectedIndex }) =>
              setSelected((state) => ({ ...state, [index]: selectedIndex }))
            }
            data-testid={`segmented-control.${size}`}
          >
            <>BTC</>
            <span>BNB</span>
            <i>USDT</i>
          </SegmentedControl>
        </div>
      ))}

      <h3>disabled</h3>
      <SegmentedControl onChange={alert} selectedIndex={0} disabled>
        <span>BTC</span>
        <span>BNB</span>
      </SegmentedControl>
      <Space size="normal" />
      <SegmentedControl onChange={alert} selectedIndex={0} disabled>
        <span>BTC</span>
        <span>BNB</span>
        <span>USDT</span>
        <span>USDC</span>
        <span>ETH</span>
        <span>ABC</span>
        <span>KAT</span>
        <span>BCC</span>
        <span>SWINGBY</span>
        <span>USDS</span>
        <span>TUSD</span>
      </SegmentedControl>

      <h3>fit</h3>
      <SegmentedControl onChange={alert} selectedIndex={0} shape="fit">
        <span>BTC</span>
        <span>BNB</span>
      </SegmentedControl>
    </div>
  );
};
