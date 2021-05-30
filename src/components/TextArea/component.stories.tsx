import React, { useState } from 'react';
import styled from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { TextArea } from '.';

export default {
  component: TextArea,
  decorators,
  title: `${Sections.Inputs}/TextArea`,
};

export const Text = () => {
  const [value, setValue] = useState('Some text…');
  return <TextArea value={value} onChange={(evt) => setValue(evt.target.value)} />;
};

export const WithLabel = () => (
  <TextArea placeholder="Some placeholder…" label="A label" value="" />
);

export const WithDescription = () => (
  <TextArea placeholder="Some placeholder…" description="A description" value="" />
);

export const WithPlaceholder = () => <TextArea placeholder="Some placeholder…" value="" />;

export const WithLeftAndRightAppendixes = () => (
  <TextArea
    label="Amount"
    placeholder="Some placeholder…"
    value=""
    left={<div style={{ display: 'flex', alignItems: 'center' }}>€</div>}
    right={<Button variant="primary">MAX</Button>}
  />
);

const CustomTextArea = styled(TextArea)`
  ${TextArea.Label} {
    color: #f8bbd0;
  }

  ${TextArea.Input} {
    background: #e8f5e9;
    color: #64b5f6;

    ::placeholder {
      color: #7e57c2;
    }
  }
`;

export const CustomStyles = () => (
  <CustomTextArea placeholder="Some placeholder…" label="A label" value="" />
);
