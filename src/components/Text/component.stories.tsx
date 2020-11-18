import React from 'react';
import styled, { useTheme } from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { sizes } from './styled';

import { Text } from './';

export default {
  component: Text,
  decorators,
  title: `${Sections.Elements}/Text`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Default = () => {
  const theme = useTheme();

  const values = new Map(Object.entries(theme.honeycomb.size));

  return (
    <Container>
      <h3>size</h3>
      <Space size="normal" />
      {sizes.map((size) => (
        <>
          <Text size={size}>
            {size} ({values.get(size)}px)
          </Text>
          <Space size="normal" />
        </>
      ))}

      <h3>color</h3>
      <Text size="small" style={{ justifyContent: 'flex-start' }}>
        default="normal"
      </Text>
      <Space size="normal" />
      <Text size="normal">normal</Text>
      <Text size="normal" color={theme.honeycomb.color.text.masked}>
        masked
      </Text>
      <Text size="normal" color={theme.honeycomb.color.text.primary}>
        primary
      </Text>

      <h3>weight</h3>
      <Text size="small" style={{ justifyContent: 'flex-start' }}>
        default="regular"
      </Text>
      <Space size="normal" />
      <Text size="normal" weight="light">
        light
      </Text>
      <Text size="normal">regular</Text>
      <Text size="normal" weight="bold">
        bold
      </Text>
    </Container>
  );
};
