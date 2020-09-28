import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { sizes } from '../internal/Size';
import { Space } from '../Space';

import { Variant } from './styled';

import { SegmentedControl } from '.';

export default {
  component: SegmentedControl,
  title: `${Sections.Elements}/SegmentedControl`,
};

const render = (
  selected: Record<number, number>,
  setSelected: React.Dispatch<React.SetStateAction<Record<number, number>>>,
  variant?: Variant,
) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {sizes.map((size, index) => (
      <div key={size} style={{ marginBottom: '1em' }}>
        <h3>{size}</h3>
        <SegmentedControl
          size={size}
          variant={variant}
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
    <SegmentedControl variant={variant} selectedIndex={0} disabled>
      <span>BTC</span>
      <span>BNB</span>
    </SegmentedControl>
    <Space size="normal" />
    <SegmentedControl variant={variant} selectedIndex={0} disabled>
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
    <SegmentedControl variant={variant} selectedIndex={0} shape="fit">
      <span>BTC</span>
      <span>BNB</span>
    </SegmentedControl>
  </div>
);

export const Default = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return render(selected, setSelected);
};

export const Tabs = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return render(selected, setSelected, 'tab');
};
