import React from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { Space } from '../Space';

import { POSITIONS } from './styled';

import { Card } from './';

export default {
  title: `${Sections.Elements}/Card`,
};

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {POSITIONS.map((position) => (
      <>
        <Card position={position}>
          <div>A card with position={position}</div>
          <Button variant="primary">A button</Button>
        </Card>
        <Space size="normal" />
      </>
    ))}
  </div>
);
