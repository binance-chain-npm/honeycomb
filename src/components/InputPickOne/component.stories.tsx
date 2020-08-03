import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { InputPickOne } from './';

export default {
  title: `${Sections.Elements}/InputPickOne`,
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
    <InputPickOne selected={selected} data-testid="InputPickOne">
      {data.map((it, index) => (
        <InputPickOne.Item
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
        </InputPickOne.Item>
      ))}
    </InputPickOne>
  );
};
