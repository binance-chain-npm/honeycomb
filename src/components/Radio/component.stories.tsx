import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { Radio } from '.';

export default {
  title: `${Sections.Inputs}/Radio`,
};

export const Default = () => (
  <Card>
    <Radio onChange={action('change')} label="A value" />
  </Card>
);
