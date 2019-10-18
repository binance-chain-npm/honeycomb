import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

export const Default = () => <Button onClick={action('clicked')}>A button</Button>;

export const asAnchor = () => (
  <Button onClick={action('clicked')} tag="a" href="https://binance.org" target="_blank">
    A button
  </Button>
);

export const primary = () => (
  <Button onClick={action('clicked')} look={Button.Look.Primary}>
    A button
  </Button>
);
