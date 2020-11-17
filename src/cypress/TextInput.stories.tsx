import React, { useState } from 'react';

import { TextInput } from '../../src/components/TextInput';
import { decorators } from '../modules/decorators';
import { Sections } from '../../src/modules/sections';
import { useBuildTestId } from '../modules/test-ids';

export default {
  component: TextInput,
  decorators,
  title: `${Sections.Tests}/TextInput`,
};

export const Default = () => {
  const { buildTestId } = useBuildTestId();
  const [text, setText] = useState('');

  return (
    <>
      <div>
        <span>Value: </span>
        <span id={buildTestId('value')}>{text}</span>
      </div>
      <TextInput
        id={buildTestId('input')}
        label="Write something here"
        description="Super important input"
        onChange={(evt) => setText(evt.target.value)}
        data-testid="text-input"
        value={text}
      />
    </>
  );
};

export const LeftRight = () => {
  const { buildTestId } = useBuildTestId();

  return (
    <TextInput
      id={buildTestId('input')}
      data-testid="text-input"
      value=""
      left={<div id={buildTestId('left-content')}>left</div>}
      right={<div id={buildTestId('right-content')}>right</div>}
    />
  );
};
