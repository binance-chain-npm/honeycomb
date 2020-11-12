import React from 'react';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Checkbox } from './';

export default {
  component: Checkbox,
  decorators,
  title: `${Sections.Inputs}/Checkbox`,
};

export const Default = () => <Checkbox onChange={action('change')} label="A value" />;
