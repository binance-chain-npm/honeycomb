import React, { useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { PasswordInput, usePasswordInputValidation } from './';

export default {
  component: PasswordInput,
  decorators,
  title: `${Sections.Inputs}/PasswordInput`,
};

export const Default = () => {
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

export const WithValidationIcons = () => {
  const [value, setValue] = useState('');
  const validationProps = usePasswordInputValidation({ value, 'data-testid': 'password-input', icons: true });

  return (
    <PasswordInput
      {...validationProps}
      label="Password"
      onChange={(evt) => setValue(evt.target.value)}
      data-testid="password-input"
      value={value}
    />
  );
};
