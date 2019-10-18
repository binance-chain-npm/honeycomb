import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { Styleless } from './';

export default {
  title: `${Sections.Elements}|Styleless`,
};

export const paragraph = () => (
  <Styleless onClick={action('clicked')} tag="p">
    Some text
  </Styleless>
);

export const heading = () => (
  <Styleless onClick={action('clicked')} tag="h1">
    This is a heading
  </Styleless>
);

export const anchor = () => (
  <Styleless onClick={action('clicked')} tag="a">
    This is an anchor tag
  </Styleless>
);

export const button = () => (
  <Styleless onClick={action('clicked')} tag="button">
    This is a button
  </Styleless>
);
