import React, { useState } from 'react';

import { Checkbox } from '../components/Checkbox';
import { Sections } from '../modules/sections';
import { useBuildTestId } from '../modules/test-ids';

export default {
  component: Checkbox,
  title: `${Sections.Tests}/Checkbox`,
};

export const Default = () => {
  const { buildTestId } = useBuildTestId({ id: 'input' });
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      id={buildTestId()}
      onChange={(evt) => setChecked(evt.target.checked)}
      checked={checked}
      label="A value"
      data-testid="checkbox"
    />
  );
};
