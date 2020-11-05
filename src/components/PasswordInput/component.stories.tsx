import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { PasswordInput, usePasswordInputValidation } from './';

export default {
  component: PasswordInput,
  title: `${Sections.Inputs}/PasswordInput`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Text = () => {
  const [value, setValue] = useState('Some text…');
  const validationProps = usePasswordInputValidation({ value });
  return (
    <PasswordInput
      {...validationProps}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      description="Some description about the password."
    />
  );
};
