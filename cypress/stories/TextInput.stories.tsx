import React, { useState } from 'react';

import { TextInput } from '../../src/components/TextInput';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}|TextInput`,
};

export const Default = () => {
  const [text, setText] = useState('');
  return (
    <>
      <div>
        <span>Value: </span>
        <span id="value">{text}</span>
      </div>
      <TextInput id="input" onChange={(evt) => setText(evt.target.value)} data-testid="TextInput" />
    </>
  );
};
