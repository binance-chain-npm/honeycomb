import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Space } from '../Space';
import { Text } from '../Text';

import { PanelControl } from '.';

export default {
  component: PanelControl,
  decorators,
  title: `${Sections.Elements}/PanelControl`,
};

const Item = styled(Text)`
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge - 2, theme.honeycomb.size.reduced)};
`;

export const Horizontal = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="horizontal">
      <PanelControl.Item selected={selected === 0} onClick={() => setSelected(0)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 1} onClick={() => setSelected(1)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 2} onClick={() => setSelected(2)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item disabled>
        <Item size="reduced">Disabled Item</Item>
      </PanelControl.Item>
    </PanelControl>
  );
};

export const Vertical = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="vertical">
      <PanelControl.Item selected={selected === 0} onClick={() => setSelected(0)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 1} onClick={() => setSelected(1)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 2} onClick={() => setSelected(2)}>
        <Item size="reduced">Item</Item>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item disabled>
        <Item size="reduced">Disabled Item</Item>
      </PanelControl.Item>
    </PanelControl>
  );
};

const FixedWidthItem = styled(Item)`
  width: ${({ theme }) => em(theme.honeycomb.size.giant - 2, theme.honeycomb.size.reduced)};
`;

export const FixedWidth = () => {
  return (
    <PanelControl orientation="horizontal" shape="fit">
      <PanelControl.Item selected>
        <FixedWidthItem size="reduced">ERC20</FixedWidthItem>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item>
        <FixedWidthItem size="reduced">OMNI</FixedWidthItem>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item>
        <FixedWidthItem size="reduced">TRC20</FixedWidthItem>
      </PanelControl.Item>
    </PanelControl>
  );
};