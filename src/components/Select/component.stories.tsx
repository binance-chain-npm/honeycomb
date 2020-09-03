import React, { useState } from 'react';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';

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

export const Default = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>();

  const renderSelected = () => {
    if (!selected) return 'Select an option...';

    return (
      <>
        <span style={{ marginRight: '1em' }}>You have selected:</span>
        {selected.label}
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
            left={<it.icon />}
          >
            {it.label}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

const StyledSelectOption = styled(Select.Option)`
  ${ListItem.Content} {
    height: 100%;
  }
`;

export const Behaviour = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Add');

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="open-btn">
        Show
      </Button>
      <Select data-testid="select" title="A Title" open={open} onClose={() => setOpen(false)}>
        <StyledSelectOption
          searchAs={['my photo', 'A crazy item']}
          isSelected={selected === 'photo'}
          onClick={() => setSelected('photo')}
          data-testid="photo"
          htmlTag="div"
        >
          <img src={pic} alt="" height="100%" />
        </StyledSelectOption>
        {data.map((it, index) => (
          <Select.Option
            key={index}
            searchAs={it.label}
            isSelected={selected === it.label}
            onClick={() => setSelected(it.label)}
            data-testid={`${index}`}
            left={<it.icon />}
          >
            {it.label}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
