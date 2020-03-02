import React, { useState } from 'react';

import { PasswordInput } from '../../src/components/PasswordInput';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}|PasswordInput`,
};

export const Default = () => {
  const [text, setText] = useState('');
  return (
    <PasswordInput
      label="Write something here"
      onChange={(evt) => setText(evt.target.value)}
      data-testid="PasswordInput"
      value={text}
    />
  );
};
