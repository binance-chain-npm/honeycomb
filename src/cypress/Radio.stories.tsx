import React, { useState } from 'react';

import { Radio } from '../components/Radio';
import { Sections } from '../modules/sections';

export default {
  title: `${Sections.Tests}/Radio`,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      id="input"
      onChange={(evt) => setChecked(evt.target.checked)}
      checked={checked}
      label="A value"
      data-testid="radio"
    />
  );
};
