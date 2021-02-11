import React, { useState } from 'react';
import styled from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';

// @ts-ignore
import pic from './pic.png';

import { Select } from './';

export default {
  component: Select,
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
    icon: Icon.WarningCircleSolid,
  },
];
const placeholder = 'Select an option...';

export const Responsive = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>();

  return (
    <>
      <Select
        data-testid="select"
        title="A Title"
        optionsTitle="Options"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget
            onClick={() => setOpen((value) => !value)}
            left={selected ? <selected.icon /> : undefined}
            data-testid="select"
          >
            {selected ? selected.label : placeholder}
          </Select.DefaultTarget>
        }
      >
        {data.map((it, index) => (
          <Select.Option
            key={index}
            onClick={() => setSelected(it)}
            searchAs={it.label}
            selected={selected?.label === it.label}
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
Responsive.decorators = decorators;

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>();

  return (
    <>
      <Select
        data-testid="select"
        variant="dropdown"
        title="A Title"
        optionsTitle="Options"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget
            onClick={() => setOpen((value) => !value)}
            left={selected ? <selected.icon /> : undefined}
            data-testid="select"
          >
            {selected ? selected.label : placeholder}
          </Select.DefaultTarget>
        }
      >
        {data.map((it, index) => (
          <Select.Option
            key={index}
            onClick={() => setSelected(it)}
            searchAs={it.label}
            selected={selected?.label === it.label}
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
Dropdown.decorators = decorators;

const StyledSelectOption = styled(Select.Option)`
  ${ListItem.Content} {
    height: 100%;
  }
`;

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <>
      <Select
        data-testid="select"
        variant="modal"
        title="A Title"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget onClick={() => setOpen((value) => !value)} data-testid="select">
            {selected ? selected : placeholder}
          </Select.DefaultTarget>
        }
      >
        <StyledSelectOption
          searchAs={['my photo', 'A crazy item']}
          selected={selected === 'photo'}
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
            selected={selected === it.label}
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

export const NonFilterable = () => {
  return (
    <>
      <Select data-testid="select" optionsTitle="Non-Filterable Options" open={true} target={null}>
        <ListItem interactive={false} data-testid="non-filterable">
          Some non-filterable element
        </ListItem>
        {new Array(5).fill(null).map((_, index) => (
          <Select.Option key={index} searchAs="" data-testid={`${index}`}>
            Option {index + 1}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export const WithSearchPlaceholder = () => {
  return (
    <>
      <Select open={true} target={null} searchPlaceholder="Search...">
        {new Array(5).fill(null).map((_, index) => (
          <Select.Option key={index} searchAs={`Option ${index + 1}`} data-testid={`${index}`}>
            Option {index + 1}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
