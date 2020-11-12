import React from 'react';

import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { variants } from './styled';

import { Badge } from './';

export default {
  title: `${Sections.Elements}/Badge`,
};

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    {variants.map((variant, index) => (
      <>
        <Badge variant={variant}>{variant}</Badge>
        {index !== variants.length - 1 && <Space size="normal" />}
      </>
    ))}
  </div>
);
