import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { POSITIONS } from './styled';

import { Card } from './';

export default {
  component: Card,
  title: `${Sections.Elements}/Card`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Default = () => (
  <Container>
    {POSITIONS.map((position) => (
      <Card position={position}>
        <div>A card with position={position}</div>
        <Button variant="primary">A button</Button>
      </Card>
    ))}
  </Container>
);
