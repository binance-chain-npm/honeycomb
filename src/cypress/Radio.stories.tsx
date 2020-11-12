import React, { useState } from 'react';

import { Radio } from '../components/Radio';
import { decorators } from '../modules/decorators';
import { Sections } from '../modules/sections';
import { useBuildTestId } from '../modules/test-ids';

export default {
  component: Radio,
  decorators,
  title: `${Sections.Tests}/Radio`,
};

export const Default = () => {
  const { buildTestId } = useBuildTestId({ id: 'input' });
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      id={buildTestId()}
      onChange={(evt) => setChecked(evt.target.checked)}
      checked={checked}
      label="A value"
      data-testid="radio"
    />
  );
};
