import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { HoverEffect } from './';

export default {
  title: `${Sections.Elements}/HoverEffect`,
};

export const paragraph = () => (
  <HoverEffect onClick={action('clicked')} as="p">
    Some text
  </HoverEffect>
);

export const heading = () => (
  <HoverEffect onClick={action('clicked')} as="h1">
    This is a heading
  </HoverEffect>
);

export const anchor = () => (
  <HoverEffect onClick={action('clicked')} as="a">
    This is an anchor tag
  </HoverEffect>
);

export const button = () => (
  <HoverEffect onClick={action('clicked')} as="button">
    This is a button
  </HoverEffect>
);
