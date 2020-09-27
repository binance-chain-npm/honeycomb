import React, { useState } from 'react';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';
import { sizes } from '../internal/Size';
import { Space } from '../Space';

import { Variant } from './styled';

import { Control } from '.';

export default {
  component: Control,
  title: `${Sections.Elements}/Control`,
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
        <Control
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
        </Control>
      </div>
    ))}

    <h3>disabled</h3>
    <Control variant={variant} selectedIndex={0} disabled>
      <span>BTC</span>
      <span>BNB</span>
    </Control>
    <Space size="normal" />
    <Control variant={variant} selectedIndex={0} disabled>
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
    </Control>

    <h3>fit</h3>
    <Control variant={variant} selectedIndex={0} shape="fit">
      <span>BTC</span>
      <span>BNB</span>
    </Control>
  </div>
);

export const SegmentedControl = () => {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return render('segmented', selected, setSelected);
};

const BorderedTabControl = styled(Control)`
  ${Control.Container} {
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
