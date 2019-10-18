import React, { useState } from 'react';

import { Checkbox } from '../../src/components/Checkbox';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}|Checkbox`,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      id="input"
      onChange={(evt) => setChecked(evt.target.value)}
      value={checked}
      label="A value"
      data-testid="Checkbox"
    />
  );
};
