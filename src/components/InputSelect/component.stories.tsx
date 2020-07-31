import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { InputSelect } from '.';

export default {
  title: `${Sections.Elements}/InputSelect`,
};

const data: Array<{ label: string; icon: typeof Icon.Add }> = [
  {
    label: 'Add',
    icon: Icon.Add,
  },
  {
    label: 'ArrowTopRight',
    icon: Icon.ArrowTopRight,
  },
  {
    label: 'EyeBlocked',
    icon: Icon.EyeBlocked,
  },
  {
    label: 'Globe',
    icon: Icon.Globe,
  },
];

export const Default = () => {
  const [selected, setSelected] = useState<React.ReactNode>('Pick an option...');

  return (
    <InputSelect selected={selected} data-testid="InputSelect">
      {data.map((it, index) => (
        <InputSelect.Item
          onClick={() =>
            setSelected(
              <>
                <it.icon />
                <span style={{ marginLeft: '1em' }}>{it.label}</span>
              </>,
            )
          }
          searchAs={it.label}
          data-testid={`${index}`}
        >
          <it.icon />
          <span style={{ marginLeft: '1em' }}>{it.label}</span>
        </InputSelect.Item>
      ))}
    </InputSelect>
  );
};
