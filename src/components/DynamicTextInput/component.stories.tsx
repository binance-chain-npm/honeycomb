import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { DynamicTextInput } from '.';

export default {
  title: `${Sections.Inputs}/DynamicTextInput`,
};

export const Text = () => {
  const [value, setValue] = useState('');
  return (
    <DynamicTextInput
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      description="The font size in this input shrinks as the input grows."
    />
  );
};
