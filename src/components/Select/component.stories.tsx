import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Icon } from '../Icon';

// @ts-ignore
import pic from './variant/ModalSelect/pic.png';

import { Select } from '.';

export default {
  title: `${Sections.Elements}/Select`,
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

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<React.ReactNode>('Pick an option...');

  return (
    <Select
      selected={selected}
      data-testid="select.dropdown"
      open={open}
      toggleOpen={() => setOpen((value) => !value)}
    >
      {data.map((it, index) => (
        <Select.Option
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
        </Select.Option>
      ))}
    </Select>
  );
};

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Add');

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="open-btn">
        Show
      </Button>
      <Select
        variant="modal"
        data-testid="select.modal"
        title="A Title"
        open={open}
        toggleOpen={() => setOpen(false)}
      >
        {data.map((it, index) => (
          <Select.Option
            searchAs={it.label}
            isSelected={selected === it.label}
            onClick={() => setSelected(it.label)}
            data-testid={`${index}`}
          >
            <it.icon />
            &nbsp;<span>{it.label}</span>
          </Select.Option>
        ))}
        <Select.Option
          searchAs={['my photo', 'A crazy item']}
          isSelected={selected === 'photo'}
          onClick={() => setSelected('photo')}
          data-testid="photo"
        >
          <img src={pic} alt="" style={{ maxHeight: '100%' }} />
        </Select.Option>
      </Select>
    </>
  );
};
