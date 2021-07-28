import React from 'react';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Switch } from '.';

export default {
  component: Switch,
  decorators,
  title: `${Sections.Inputs}/Switch`,
};

export const Default = () => <Switch onChange={action('change')} />;
