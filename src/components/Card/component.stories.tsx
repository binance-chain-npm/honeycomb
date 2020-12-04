import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Text } from '../../components/Text';

import { POSITIONS, SHADOWS } from './styled';

import { Card } from './';

export default {
  component: Card,
  decorators,
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
    <h3>position</h3>
    <Text size="small" alignSelf="start">
      default="center"
    </Text>
    {POSITIONS.map((position) => (
      <Card position={position}>
        <div>A card with position={position}</div>
      </Card>
    ))}

    <h3>shadow</h3>
    <Text size="small" alignSelf="start">
      default="normal"
    </Text>
    {SHADOWS.map((shadow) => (
      <Card shadow={shadow}>
        <div>A card with shadow={shadow}</div>
      </Card>
    ))}

    <h3>outlined</h3>
    <Card shadow="none" outlined>
      <div>An outlined card</div>
    </Card>
  </Container>
);
