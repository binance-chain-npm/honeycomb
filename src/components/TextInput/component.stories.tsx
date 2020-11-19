import React, { useState } from 'react';
import styled from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { SIZES } from '../internal/Size';
import { Button } from '../Button';

import { TextInput } from './';

export default {
  component: TextInput,
  decorators,
  title: `${Sections.Inputs}/TextInput`,
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

export const WithDescription = () => (
  <TextInput placeholder="Some placeholder…" label="A label" value="" />
);

export const WithPlaceholder = () => <TextInput placeholder="Some placeholder…" value="" />;

export const WithLeftAndRightAppendixes = () => (
  <TextInput
    label="Amount"
    placeholder="Some placeholder…"
    value=""
    left={<div>€</div>}
    right={
      <Button variant="primary" size="increased" shape="fit">
        MAX
      </Button>
    }
  />
);

export const Dynamic = () => {
  const [value, setValue] = useState('Some text...');

  return (
    <>
      {SIZES.map((size) => (
        <div style={{ marginBottom: '1em' }}>
          <TextInput
            value={value}
            size={size}
            onChange={(evt) => setValue(evt.target.value)}
            data-testid={`input-${size}`}
            dynamic
          />
        </div>
      ))}
    </>
  );
};

export const Sizes = () => (
  <>
    {SIZES.map((size) => (
      <div style={{ marginBottom: '1em' }}>
        <TextInput key={`${size}`} size={size} value={`A ${size} text input`} />
      </div>
    ))}
  </>
);

const CustomTextInput = styled(TextInput)`
  ${TextInput.Label} {
    color: #f8bbd0;
  }

  ${TextInput.InputContainer} {
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
