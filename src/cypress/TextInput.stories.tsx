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
      <TextInput
        id="input"
        label="Write something here"
        onChange={(evt) => setText(evt.target.value)}
        data-testid="TextInput"
        value={text}
      />
    </>
  );
};

export const LeftRight = () => {
  return (
    <TextInput
      id="input"
      data-testid="TextInput"
      value=""
      left={<div id="left-content" />}
      right={<div id="right-content" />}
    />
  );
};
