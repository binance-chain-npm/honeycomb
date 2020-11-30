import React, { useState } from 'react';

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

export const Horizontal = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="horizontal" padding="small">
      <PanelControl.Item selected={selected === 0} onClick={() => setSelected(0)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 1} onClick={() => setSelected(1)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 2} onClick={() => setSelected(2)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item disabled>
        <Text size="reduced">Disabled Item</Text>
      </PanelControl.Item>
    </PanelControl>
  );
};

export const Vertical = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="vertical" padding="small">
      <PanelControl.Item selected={selected === 0} onClick={() => setSelected(0)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 1} onClick={() => setSelected(1)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item selected={selected === 2} onClick={() => setSelected(2)}>
        <Text size="reduced">Item</Text>
      </PanelControl.Item>
      <Space size="normal" />
      <PanelControl.Item disabled>
        <Text size="reduced">Disabled Item</Text>
      </PanelControl.Item>
    </PanelControl>
  );
};
