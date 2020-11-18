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

  return (
    <Container>
      <h3>size</h3>
      <Space size="normal" />
      {sizes.map((size) => (
        <>
          <Text size={size}>{size}</Text>
          <Space size="normal" />
        </>
      ))}

      <h3>color</h3>
      <Space size="normal" />
      <Text>normal</Text>
      <Text color={theme.honeycomb.color.text.masked}>masked</Text>
      <Text color={theme.honeycomb.color.text.primary}>primary</Text>

      <h3>weight</h3>
      <Space size="normal" />
      <Text weight="light">light</Text>
      <Text>regular</Text>
      <Text weight="bold">bold</Text>
    </Container>
  );
};
