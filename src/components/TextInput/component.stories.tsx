import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { SIZES } from '../internal/Size';
import { Button } from '../Button';
import { Space } from '../Space';

import { TextInput } from './';

export default {
  component: TextInput,
  decorators,
  title: `${Sections.Inputs}/TextInput`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

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
        Max
      </Button>
    }
  />
);

export const WithEnd = () => {
  const [value, setValue] = useState('Some text...');

  return (
    <Container>
      <TextInput
        label="With End"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        end={
          <>
            <Space size="tiny" />
            <Button variant="secondary" shape="fit">
              Max
            </Button>
          </>
        }
      />
      <TextInput
        label="With End and Left/Right Appendixes"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        left={<div>€</div>}
        right={
          <Button variant="primary" size="increased" shape="fit">
            Max
          </Button>
        }
        end={
          <>
            <Space size="tiny" />
            <Button variant="secondary" shape="fit">
              Max
            </Button>
          </>
        }
      />
      <TextInput
        label="Dynamic With End"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        size="giant"
        dynamic
        end={
          <>
            <Space size="tiny" />
            <Button variant="secondary" shape="fit" size="giant">
              Max
            </Button>
          </>
        }
      />
    </Container>
  );
};

export const Dynamic = () => {
  const [value, setValue] = useState('Some text...');

  return (
    <Container>
      {SIZES.map((size) => (
        <TextInput
          value={value}
          size={size}
          onChange={(evt) => setValue(evt.target.value)}
          data-testid={`input-${size}`}
          dynamic
        />
      ))}
    </Container>
  );
};

export const Sizes = () => (
  <Container>
    {SIZES.map((size) => (
      <TextInput key={`${size}`} size={size} value={`A ${size} text input`} />
    ))}
  </Container>
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
