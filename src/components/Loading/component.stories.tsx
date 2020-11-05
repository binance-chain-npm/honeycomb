import React from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Loading } from './';

export default {
  component: Loading,
  title: `${Sections.Elements}/Loading`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => <Loading />;

export const FillViewport = () => (
  <>
    <Button variant="primary">A test</Button>
    <Loading fillViewport />
  </>
);
