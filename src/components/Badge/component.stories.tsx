import React from 'react';

import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { VARIANTS } from './styled';

import { Badge } from './';

export default {
  component: Badge,
  title: `${Sections.Elements}/Badge`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    {VARIANTS.map((variant) => (
      <>
        <Badge variant={variant}>{variant}</Badge>
        <Space size="normal" />
      </>
    ))}
  </div>
);
