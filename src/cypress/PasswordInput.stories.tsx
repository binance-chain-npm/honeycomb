import React, { useState } from 'react';

import { PasswordInput, usePasswordInputValidation } from '../../src/components/PasswordInput';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}/PasswordInput`,
};

export const Default = () => {
  const [value, setValue] = useState('');
  const validationProps = usePasswordInputValidation({ value, 'data-testid': 'PasswordInput' });
  return (
    <PasswordInput
      {...validationProps}
      label="Write something here"
      onChange={(evt) => setValue(evt.target.value)}
      data-testid="PasswordInput"
      value={value}
    />
  );
};
