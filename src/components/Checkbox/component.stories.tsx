import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { Checkbox } from './';

export default {
  component: Checkbox,
  title: `${Sections.Inputs}/Checkbox`,
};

export const Default = () => <Checkbox onChange={action('change')} label="A value" />;
