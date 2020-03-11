import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

export const Default = () => <Button onClick={action('clicked')}>A button</Button>;

export const Disabled = () => (
  <Button onClick={action('clicked')} disabled>
    A disabled button
  </Button>
);

export const AsAnchor = () => (
  <Button onClick={action('clicked')} href="https://binance.org" target="_blank">
    A button
  </Button>
);

export const Primary = () => (
  <Button onClick={action('clicked')} look={Button.Look.Primary}>
    A button
  </Button>
);

export const PrimaryDisabled = () => (
  <Button onClick={action('clicked')} disabled look={Button.Look.Primary}>
    A disabled button
  </Button>
);
