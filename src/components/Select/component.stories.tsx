import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { SHAPES, SIZES } from '../internal/DefaultTarget';
import { ListItem } from '../ListItem';

// @ts-ignore
import pic from './pic.png';

import { Select } from '.';

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
        title="Select an Option"
        optionTitle="Options"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget
            onClick={() => setOpen((value) => !value)}
            left={selected ? <selected.icon /> : undefined}
            data-testid="select.default-target"
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
        title="Select an Option"
        optionTitle="Options"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget
            onClick={() => setOpen((value) => !value)}
            left={selected ? <selected.icon /> : undefined}
            data-testid="select.default-target"
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
  height: 4em;

  ${ListItem.Content} {
    height: 100%;
  }
`;

export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <Card>
      <Select
        data-testid="select"
        variant="modal"
        title="Select an Option"
        open={open}
        onClose={() => setOpen(false)}
        target={
          <Select.DefaultTarget
            onClick={() => setOpen((value) => !value)}
            data-testid="select.default-target"
          >
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
    </Card>
  );
};

export const NonFilterable = () => {
  return (
    <Select target="" open={true} onClose={() => {}} data-testid="select">
      <ListItem interactive={false} data-testid="non-filterable">
        Non-filterable element
      </ListItem>
      {new Array(5).fill(null).map((_, index) => (
        <Select.Option key={index} data-testid={`${index}`}>
          Option {index + 1}
        </Select.Option>
      ))}
    </Select>
  );
};

export const WithSearchPlaceholder = () => {
  return (
    <Select
      target={
        <Select.DefaultTarget data-testid="select.default-target">Select</Select.DefaultTarget>
      }
      searchPlaceholder="Search..."
    >
      {new Array(5).fill(null).map((_, index) => (
        <Select.Option key={index} searchAs={`Option ${index + 1}`} data-testid={`${index}`}>
          Option {index + 1}
        </Select.Option>
      ))}
    </Select>
  );
};

export const WithManyOptions = () => {
  const StyledSelectOption = styled(Select.Option)`
    height: ${({ theme }) => em(100, theme.honeycomb.size.reduced)};
  `;

  const [open, setOpen] = useState(false);

  return (
    <Select
      variant="dropdown"
      open={open}
      target={
        <Select.DefaultTarget onClick={() => setOpen((value) => !value)}>
          Select
        </Select.DefaultTarget>
      }
      optionItemHeight={100}
    >
      {new Array(1000).fill(null).map((_, index) => (
        <StyledSelectOption key={index} searchAs={`Option ${index + 1}`} data-testid={`${index}`}>
          Option {index + 1}
        </StyledSelectOption>
      ))}
    </Select>
  );
};

export const Controlled = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const click = useCallback(() => {
    if (!open) setSearch('');
    setOpen((value) => !value);
  }, [open]);

  return (
    <Select
      target={
        <Select.DefaultTarget onClick={click} data-testid="select.default-target">
          Select
        </Select.DefaultTarget>
      }
      open={open}
      onClose={() => setOpen(false)}
      search={search}
      onChangeSearch={(evt) => setSearch(evt.target.value)}
    >
      {new Array(5).fill(null).map((_, index) => (
        <Select.Option key={index} searchAs={`Option ${index + 1}`} data-testid={`${index}`}>
          Option {index + 1}
        </Select.Option>
      ))}
    </Select>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const TargetVariants = () => {
  return (
    <Container>
      <h3>size</h3>
      {SIZES.map((size) => (
        <Select.DefaultTarget size={size}>{size}</Select.DefaultTarget>
      ))}
      <h3>shape</h3>
      {SHAPES.map((shape) => (
        <Select.DefaultTarget shape={shape}>{shape}</Select.DefaultTarget>
      ))}
    </Container>
  );
};
TargetVariants.decorators = decorators;
