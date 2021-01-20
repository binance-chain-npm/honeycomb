import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import placeholder from './placeholder.svg';

import { Swiper } from './';

export default {
  component: Swiper,
  decorators,
  title: `${Sections.Elements}/Swiper`,
};

const Container = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.honeycomb.color.text.primary};
`;

const Label = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => em(theme.honeycomb.size.huge)};
`;

export const Default = () => {
  return (
    <Swiper data-testid="swiper">
      {new Array(5).fill(null).map((_, index) => (
        <Swiper.Item data-testid={`item-${index}`}>
          <Container>
            <img alt="" src={placeholder} />
            <Label>{index + 1}</Label>
          </Container>
        </Swiper.Item>
      ))}
    </Swiper>
  );
};
