import React from 'react';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Styleless } from './';

export default {
  component: Styleless,
  decorators,
  title: `${Sections.Elements}/Styleless`,
};

export const paragraph = () => (
  <Styleless onClick={action('clicked')} htmlTag="p">
    Some text
  </Styleless>
);

export const heading = () => (
  <Styleless onClick={action('clicked')} htmlTag="h1">
    This is a heading
  </Styleless>
);

export const anchor = () => (
  <Styleless onClick={action('clicked')} htmlTag="a">
    This is an anchor tag
  </Styleless>
);

export const button = () => (
  <Styleless onClick={action('clicked')} htmlTag="button">
    This is a button
  </Styleless>
);
