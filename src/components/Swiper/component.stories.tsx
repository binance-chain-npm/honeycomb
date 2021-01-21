import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { useBuildTestId } from '../../modules/test-ids';

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
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
`;

const Label = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Default = () => {
  const { buildTestId } = useBuildTestId({ id: 'swiper' });

  return (
    <Swiper data-testid={buildTestId()}>
      {new Array(5).fill(null).map((_, index) => (
        <Swiper.Item data-testid={buildTestId(`item-${index}`)}>
          <Container>
            <img alt="" src={placeholder} width="100%" />
            <Label data-testid={buildTestId(`item-${index}.label`)}>{index + 1}</Label>
          </Container>
        </Swiper.Item>
      ))}
    </Swiper>
  );
};
