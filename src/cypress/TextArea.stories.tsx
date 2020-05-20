import React, { useState } from 'react';

import { TextArea } from '../../src/components/TextArea';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}|TextArea`,
};

export const Default = () => {
  const [text, setText] = useState('');
  return (
    <>
      <div>
        <span>Value: </span>
        <span id="value">{text}</span>
      </div>
      <TextArea
        id="input"
        label="Write something here"
        onChange={(evt) => setText(evt.target.value)}
        data-testid="TextArea"
        value={text}
      />
    </>
  );
};

export const LeftRight = () => {
  return (
    <TextArea
      id="input"
      data-testid="TextArea"
      value=""
      left={<div id="left-content" />}
      right={<div id="right-content" />}
    />
  );
};
