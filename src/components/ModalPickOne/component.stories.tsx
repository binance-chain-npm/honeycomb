import React from 'react';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

// @ts-ignore
import pic from './pic.png';

import { ModalPickOne } from './';

export default {
  title: `${Sections.Elements}|ModalPickOne`,
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
  return (
    <ModalPickOne open={true} data-testid="MyModal">
      {data.map((it, index) => (
        <ModalPickOne.Item
          searchAs={it.label}
          isSelected={index === 0}
          data-testid={`MyModal.item.${index}`}
        >
          <it.icon />
          &nbsp;<span>{it.label}</span>
        </ModalPickOne.Item>
      ))}
      <ModalPickOne.Item searchAs={['my photo', 'A crazy item']} data-testid="MyModal.item.photo">
        <img src={pic} height="100" alt="" />
      </ModalPickOne.Item>
    </ModalPickOne>
  );
};
