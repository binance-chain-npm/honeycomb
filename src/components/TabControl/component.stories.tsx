import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { sizes } from '../internal/Size';
import { Space } from '../Space';

import { TabControl } from '.';

export default {
  component: TabControl,
  title: `${Sections.Elements}/TabControl`,
};

export const Default = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {sizes.map((size, index) => (
        <div key={size} style={{ marginBottom: '1em' }}>
          <h3>{size}</h3>
          <TabControl
            size={size}
            selectedIndex={selected[index]}
            onChange={({ selectedIndex }) =>
              setSelected((state) => ({ ...state, [index]: selectedIndex }))
            }
            data-testid={`tab-control.${size}`}
          >
            <>BTC</>
            <span>BNB</span>
            <i>USDT</i>
          </TabControl>
        </div>
      ))}

      <h3>disabled</h3>
      <TabControl selectedIndex={0} disabled>
        <span>BTC</span>
        <span>BNB</span>
      </TabControl>
      <Space size="normal" />
      <TabControl selectedIndex={0} disabled>
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
      </TabControl>

      <Space size="normal" />
      <h3>with border</h3>
      <TabControl selectedIndex={0} showBorder>
        <span>BTC</span>
        <span>BNB</span>
      </TabControl>

      <h3>fit</h3>
      <TabControl selectedIndex={0} shape="fit">
        <span>BTC</span>
        <span>BNB</span>
      </TabControl>
    </div>
  );
};
