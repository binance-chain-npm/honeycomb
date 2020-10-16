import React from 'react';

import { Sections } from '../../modules/sections';

import { Steps } from '.';

export default {
  title: `${Sections.Elements}/Steps`,
};

export const Default = () => {
  return (
    <Steps activeStep={1} data-testid={'steps'}>
      <Steps.Item>1</Steps.Item>
      <Steps.Item>2</Steps.Item>
      <Steps.Item>3</Steps.Item>
    </Steps>
  );
};
