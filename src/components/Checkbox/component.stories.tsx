import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { Checkbox } from './';

export default {
  component: Checkbox,
  title: `${Sections.Inputs}/Checkbox`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => (
  <Card>
    <Checkbox onChange={action('change')} label="A value" />
  </Card>
);
