import React, { useState } from 'react';
import styled from 'styled-components';

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
  variant: Variant,
  selected: Record<number, number>,
  setSelected: React.Dispatch<React.SetStateAction<Record<number, number>>>,
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
          data-testid={`${variant}-control.${size}`}
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

export const Segmented = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return render('buttons', selected, setSelected);
};

const BorderedTabControl = styled(SegmentedControl)`
  ${SegmentedControl.Container} {
    border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  }
`;

export const TabControl = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return (
    <>
      {render('tab', selected, setSelected)}
      <Space size="normal" />
      <h3>with border</h3>
      <BorderedTabControl
        variant="tab"
        selectedIndex={selected[3]}
        onChange={({ selectedIndex }) => setSelected((state) => ({ ...state, 3: selectedIndex }))}
      >
        <span>BTC</span>
        <span>BNB</span>
      </BorderedTabControl>
    </>
  );
};
