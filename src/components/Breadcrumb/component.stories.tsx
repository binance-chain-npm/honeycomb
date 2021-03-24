import React from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Breadcrumb } from './';

export default {
  component: Breadcrumb,
  decorators,
  title: `${Sections.Elements}/Breadcrumb`,
};

export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Page A</Breadcrumb.Item>
      <Breadcrumb.Item>Page B</Breadcrumb.Item>
      <Breadcrumb.Item>Page C</Breadcrumb.Item>
    </Breadcrumb>
  );
};
