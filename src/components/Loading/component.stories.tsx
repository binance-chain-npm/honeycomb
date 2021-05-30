import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Loading } from '.';

export default {
  component: Loading,
  title: `${Sections.Elements}/Loading`,
};

export const Default: Story = () => <Loading />;
Default.decorators = decorators;

export const FillViewport = () => (
  <>
    <Button variant="primary">Button</Button>
    <Loading fillViewport />
  </>
);
