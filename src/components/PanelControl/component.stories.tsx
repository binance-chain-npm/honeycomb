import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { useBuildTestId } from '../../modules/test-ids';
import { Space } from '../Space';
import { Text } from '../Text';

import { VARIANTS } from './styled';

import { PanelControl } from './';

export default {
  component: PanelControl,
  decorators,
  title: `${Sections.Elements}/PanelControl`,
};

const Item = styled(PanelControl.Item)`
  padding: ${({ theme }) => em(theme.honeycomb.size.small)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge)};
`;

export const Horizontal = () => {
  const [selected, setSelected] = useState(0);
  const { buildTestId } = useBuildTestId({ id: 'panel-control' });

  return (
    <PanelControl orientation="horizontal" variant="solid" data-testid={buildTestId()}>
      <Item selected={selected === 0} onClick={() => setSelected(0)} data-testid={buildTestId('0')}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item selected={selected === 1} onClick={() => setSelected(1)} data-testid={buildTestId('1')}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item selected={selected === 2} onClick={() => setSelected(2)} data-testid={buildTestId('2')}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item disabled data-testid="disabled">
        <Text size="reduced">Disabled Item</Text>
      </Item>
    </PanelControl>
  );
};

export const Vertical = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="vertical" variant="solid">
      <Item selected={selected === 0} onClick={() => setSelected(0)}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item selected={selected === 1} onClick={() => setSelected(1)}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item selected={selected === 2} onClick={() => setSelected(2)}>
        <Text size="reduced">Item</Text>
      </Item>
      <Space size="normal" />
      <Item disabled>
        <Text size="reduced">Disabled Item</Text>
      </Item>
    </PanelControl>
  );
};

const FixedWidthItem = styled(Text)`
  width: ${({ theme }) => em(theme.honeycomb.size.giant - 2, theme.honeycomb.size.reduced)};
`;

export const FixedWidth = () => {
  return (
    <PanelControl orientation="horizontal" shape="fit" variant="solid">
      <Item selected>
        <FixedWidthItem size="reduced">ERC20</FixedWidthItem>
      </Item>
      <Space size="normal" />
      <Item>
        <FixedWidthItem size="reduced">OMNI</FixedWidthItem>
      </Item>
      <Space size="normal" />
      <Item>
        <FixedWidthItem size="reduced">TRC20</FixedWidthItem>
      </Item>
    </PanelControl>
  );
};

export const Variant = () => {
  return VARIANTS.map((variant) => (
    <>
      <h3>{variant}</h3>
      <PanelControl orientation="horizontal" variant={variant}>
        <Item selected>
          <Text size="reduced">Item</Text>
        </Item>
        <Space size="normal" />
        <Item>
          <Text size="reduced">Item</Text>
        </Item>
        <Space size="normal" />
        <Item>
          <Text size="reduced">Item</Text>
        </Item>
      </PanelControl>
    </>
  ));
};
