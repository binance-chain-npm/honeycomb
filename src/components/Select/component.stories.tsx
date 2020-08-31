import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Icon } from '../Icon';

// @ts-ignore
import pic from './pic.png';

import { Select } from '.';

export default {
  title: `${Sections.Elements}/Select`,
};

type Option = { label: string; icon: typeof Icon.Add };

const data: Array<Option> = [
  {
    label: 'Add',
    icon: Icon.Add,
  },
  {
    label: 'ArrowTopRight',
    icon: Icon.ArrowTopRight,
  },
  {
    label: 'Copy',
    icon: Icon.Copy,
  },
  {
    label: 'EyeBlocked',
    icon: Icon.EyeBlocked,
  },
  {
    label: 'Globe',
    icon: Icon.Globe,
  },
  {
    label: 'Link',
    icon: Icon.Link,
  },
  {
    label: 'Lock',
    icon: Icon.Lock,
  },
  {
    label: 'PowerOff',
    icon: Icon.PowerOff,
  },
  {
    label: 'Settings',
    icon: Icon.Settings,
  },
  {
    label: 'Shield',
    icon: Icon.Shield,
  },
  {
    label: 'Tick',
    icon: Icon.Tick,
  },
  {
    label: 'Warning',
    icon: Icon.Warning,
  },
];

const renderOption = (option: Option) => (
  <>
    <option.icon />
    <span style={{ marginLeft: '1em' }}>{option.label}</span>
  </>
);

export const Default = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>();

  const renderSelected = () => {
    if (!selected) return 'Select an option...';

    return (
      <>
        <span style={{ marginRight: '1em' }}>You have selected:</span>
        {renderOption(selected)}
      </>
    );
  };

  return (
    <>
      <Button variant="transparent" onClick={() => setOpen((value) => !value)} data-testid="select">
        {renderSelected()}
      </Button>
      <Select
        data-testid="select"
        title="A Title"
        optionsTitle="Options"
        open={open}
        onClose={() => setOpen(false)}
      >
        {data.map((it, index) => (
          <Select.Option
            key={index}
            onClick={() => setSelected(it)}
            searchAs={it.label}
            isSelected={selected?.label === it.label}
            data-testid={`${index}`}
          >
            {renderOption(it)}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export const Behaviour = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Add');

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="open-btn">
        Show
      </Button>
      <Select data-testid="select" title="A Title" open={open} onClose={() => setOpen(false)}>
        <Select.Option
          searchAs={['my photo', 'A crazy item']}
          isSelected={selected === 'photo'}
          onClick={() => setSelected('photo')}
          data-testid="photo"
        >
          <img src={pic} alt="" style={{ maxHeight: '100%' }} />
        </Select.Option>
        {data.map((it, index) => (
          <Select.Option
            key={index}
            searchAs={it.label}
            isSelected={selected === it.label}
            onClick={() => setSelected(it.label)}
            data-testid={`${index}`}
          >
            {renderOption(it)}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
