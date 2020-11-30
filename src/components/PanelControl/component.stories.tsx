import React, { useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { PanelControl } from '.';

export default {
  component: PanelControl,
  decorators,
  title: `${Sections.Elements}/PanelControl`,
};

export const Default = () => {
  const [selected, setSelected] = useState(0);

  return (
    <PanelControl orientation="horizontal">
      {new Array(5).fill(null).map((_, index) => {
        const key = `panel-control-${index}`;

        return (
          <>
            <PanelControl.Item
              key={key}
              selected={selected === index}
              onClick={() => setSelected(index)}
            >
              Item
            </PanelControl.Item>
            {index < 4 && <Space size="normal" />}
          </>
        );
      })}
    </PanelControl>
  );
};
