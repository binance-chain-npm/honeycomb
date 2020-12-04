import React from 'react';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { HoverEffect } from './';

export default {
  component: HoverEffect,
  decorators,
  title: `${Sections.Elements}/HoverEffect`,
};

export const Paragraph = () => (
  <HoverEffect onClick={action('clicked')} htmlTag="p">
    Some text...
  </HoverEffect>
);

export const Heading = () => (
  <HoverEffect onClick={action('clicked')} htmlTag="h1">
    This is a heading
  </HoverEffect>
);

export const Anchor = () => (
  <HoverEffect onClick={action('clicked')} htmlTag="a">
    This is an anchor tag
  </HoverEffect>
);

export const Button = () => (
  <HoverEffect onClick={action('clicked')} htmlTag="button">
    This is a button
  </HoverEffect>
);
