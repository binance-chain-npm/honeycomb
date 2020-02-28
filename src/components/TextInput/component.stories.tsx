import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';

import { TextInput } from './';

export default {
  title: `${Sections.Inputs}|TextInput`,
};

export const Text = () => {
  const [value, setValue] = useState('Some text…');
  return (
    <TextInput
      onClick={action('clicked')}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
};

export const WithLabel = () => (
  <TextInput onClick={action('clicked')} placeholder="Some placeholder…" label="A label" value="" />
);

export const Placeholder = () => (
  <TextInput onClick={action('clicked')} placeholder="Some placeholder…" value="" />
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
  <CustomTextInput
    onClick={action('clicked')}
    placeholder="Some placeholder…"
    label="A label"
    value=""
  />
);
