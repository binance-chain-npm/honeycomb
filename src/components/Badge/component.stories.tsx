import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { VARIANTS } from './styled';

import { Badge } from './';

export default {
  component: Badge,
  decorators,
  title: `${Sections.Elements}/Badge`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Default = () => (
  <Container>
    {VARIANTS.map((variant) => (
      <Badge variant={variant}>{variant}</Badge>
    ))}
  </Container>
);
