import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';

import { TextInput } from './';

export default {
  title: `${Sections.Inputs}|TextInput`,
};

export const text = () => <TextInput onClick={action('clicked')} defaultValue="Some text…" />;

export const withLabel = () => (
  <TextInput onClick={action('clicked')} placeholder="Some placeholder…" label="A label" />
);

export const placeholder = () => (
  <TextInput onClick={action('clicked')} placeholder="Some placeholder…" />
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

export const customStyles = () => (
  <CustomTextInput onClick={action('clicked')} placeholder="Some placeholder…" label="A label" />
);
