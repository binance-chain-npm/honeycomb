import React, { useState } from 'react';

// @ts-ignore
import pic from '../components/ModalPickOne/pic.png';
import { ModalPickOne } from '../components/ModalPickOne';
import { Sections } from '../modules/sections';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

export default {
  title: `${Sections.Tests}/ModalPickOne`,
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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Add');

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="OpenButton">
        Show
      </Button>
      <ModalPickOne open={open} onClose={() => setOpen(false)} data-testid="MyModal">
        {data.map((it, index) => (
          <ModalPickOne.Item
            searchAs={it.label}
            isSelected={selected === it.label}
            onClick={() => setSelected(it.label)}
            data-testid={`${index}`}
          >
            <it.icon />
            &nbsp;<span>{it.label}</span>
          </ModalPickOne.Item>
        ))}
        <ModalPickOne.Item
          searchAs={['my photo', 'A crazy item']}
          isSelected={selected === 'photo'}
          onClick={() => setSelected('photo')}
          data-testid="photo"
        >
          <img src={pic} height="100" alt="" />
        </ModalPickOne.Item>
      </ModalPickOne>
    </>
  );
};
