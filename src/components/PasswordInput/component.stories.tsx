import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { PasswordInput } from './';

export default {
  title: `${Sections.Inputs}|PasswordInput`,
};

export const Text = () => {
  const [value, setValue] = useState('Some text…');
  return (
    <PasswordInput
      onClick={action('clicked')}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
};
