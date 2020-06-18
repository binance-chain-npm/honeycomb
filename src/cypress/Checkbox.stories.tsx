import React, { useState } from 'react';

import { Checkbox } from '../components/Checkbox';
import { Sections } from '../modules/sections';

export default {
  title: `${Sections.Tests}/Checkbox`,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      id="input"
      onChange={(evt) => setChecked(evt.target.checked)}
      checked={checked}
      label="A value"
      data-testid="Checkbox"
    />
  );
};
