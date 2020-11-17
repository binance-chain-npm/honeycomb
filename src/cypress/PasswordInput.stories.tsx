import React, { useState } from 'react';

import { PasswordInput, usePasswordInputValidation } from '../../src/components/PasswordInput';
import { decorators } from '../../src/modules/decorators';
import { Sections } from '../../src/modules/sections';

export default {
  component: PasswordInput,
  decorators,
  title: `${Sections.Tests}/PasswordInput`,
};

export const Default = () => {
  const [value, setValue] = useState('');
  const validationProps = usePasswordInputValidation({ value, 'data-testid': 'password-input' });

  return (
    <PasswordInput
      {...validationProps}
      label="Write something here"
      onChange={(evt) => setValue(evt.target.value)}
      data-testid="password-input"
      value={value}
    />
  );
};
