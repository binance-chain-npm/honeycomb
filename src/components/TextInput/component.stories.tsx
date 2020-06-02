import React, { useState } from 'react';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { TextInput } from './';

export default {
  title: `${Sections.Inputs}|TextInput`,
};

export const Text = () => {
  const [value, setValue] = useState('Some text…');
  return <TextInput value={value} onChange={(evt) => setValue(evt.target.value)} />;
};

export const InvalidText = () => {
  const [value, setValue] = useState('Invalid text…');
  return <TextInput state="danger" value={value} onChange={(evt) => setValue(evt.target.value)} />;
};

export const WithLabel = () => (
  <TextInput placeholder="Some placeholder…" label="A label" value="" />
);

export const WithLabelAndDescription = () => (
  <TextInput placeholder="Some placeholder…" label="A label" description="A description" value="" />
);

export const Placeholder = () => <TextInput placeholder="Some placeholder…" value="" />;

export const LeftAndRightAppendixes = () => (
  <TextInput
    label="Amount"
    placeholder="Some placeholder…"
    value=""
    left={<div style={{ display: 'flex', alignItems: 'center' }}>€</div>}
    right={
      <Button variant="primary" size="large">
        MAX
      </Button>
    }
  />
);

const CustomTextInput = styled(TextInput)`
  ${TextInput.Label} {
    color: #f8bbd0;
  }

  ${TextInput.Input} {
    background: #e8f5e9;
    color: #64b5f6;

    ::placeholder {
      color: #7e57c2;
    }
  }
`;

export const CustomStyles = () => (
  <CustomTextInput placeholder="Some placeholder…" label="A label" value="" />
);
