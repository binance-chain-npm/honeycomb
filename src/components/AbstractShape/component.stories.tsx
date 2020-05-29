import React from 'react';

import { Sections } from '../../modules/sections';

import { AbstractShape } from './';

export default {
  title: `${Sections.Elements}|AbstractShape`,
};

export const Default = () => (
  <>
    <AbstractShape value="what is this even" />
    <AbstractShape value="another text" />
    <AbstractShape value="and another one" />
    <AbstractShape value="and one more" />
  </>
);
