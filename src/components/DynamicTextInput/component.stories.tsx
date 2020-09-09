import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { DynamicTextInput } from '.';

export default {
  title: `${Sections.Inputs}/DynamicTextInput`,
};

export const Default = () => {
  const [value, setValue] = useState('Some text...');

  return (
    <DynamicTextInput
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      data-testid="input"
    />
  );
};
