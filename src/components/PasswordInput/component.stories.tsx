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
  const [value, setValue] = useState('');
  const validationProps = usePasswordInputValidation({ value, 'data-testid': 'password-input' });

  return (
    <PasswordInput
      {...validationProps}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      data-testid="password-input"
    />
  );
};

export const WithoutValidationIcons = () => {
  const [value, setValue] = useState('Some text…');
  const validationProps = usePasswordInputValidation({
    value,
    'data-testid': 'password-input',
    icons: false,
  });

  return (
    <PasswordInput
      {...validationProps}
      label="Password"
      description="Some description about the password."
      onChange={(evt) => setValue(evt.target.value)}
      value={value}
    />
  );
};
