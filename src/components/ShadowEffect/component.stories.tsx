import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { SIZES } from './styled';

import { ShadowEffect } from './';

export default {
  component: ShadowEffect,
  decorators,
  title: `${Sections.Elements}/ShadowEffect`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const Content = styled.div`
  padding: 1em;
`;

export const Default = () => (
  <Container>
    {SIZES.map((size) => (
      <ShadowEffect size={size}>
        <Content>size="{size}"</Content>
      </ShadowEffect>
    ))}
  </Container>
);
