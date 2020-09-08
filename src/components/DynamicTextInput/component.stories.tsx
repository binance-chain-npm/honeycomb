import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { DynamicTextInput } from '.';

export default {
  title: `${Sections.Inputs}/DynamicTextInput`,
};

export const Text = () => {
  const [value, setValue] = useState('Some really really really long text');
  return (
    <div>
      <DynamicTextInput
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
};
