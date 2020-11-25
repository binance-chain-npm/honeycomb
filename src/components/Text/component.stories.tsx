import React from 'react';
import styled, { useTheme } from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { SIZES, WEIGHTS } from './styled';

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

const StyledText = styled(Text)`
  background: ${({ theme }) => theme.honeycomb.color.border};
`;

export const Default = () => {
  const theme = useTheme();

  const values = new Map(Object.entries(theme.honeycomb.size));

  return (
    <Container>
      <h3>size</h3>
      <Space size="normal" />
      {SIZES.map((size) => (
        <>
          <Text size={size}>
            {size} ({values.get(size)}px)
          </Text>
          <Space size="tiny" />
        </>
      ))}

      <h3>color</h3>
      <Text size="small" alignSelf="start">
        default=theme "normal"
      </Text>
      <Text size="small" alignSelf="start">
        accepts any CSS `color` value
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
      <Text size="small" alignSelf="start">
        default="regular"
      </Text>
      <Space size="normal" />
      {WEIGHTS.map((weight) => (
        <Text size="normal" weight={weight}>
          {weight}
        </Text>
      ))}

      <h3>align</h3>
      <Text size="small" alignSelf="start">
        accepts any CSS `align-self` value
      </Text>
      <Space size="normal" />
      <StyledText size="normal" alignSelf="start">
        start
      </StyledText>
      <StyledText size="normal" alignSelf="center">
        center
      </StyledText>
      <StyledText size="normal" alignSelf="end">
        end
      </StyledText>
      <StyledText size="normal" alignSelf="stretch">
        stretch
      </StyledText>
    </Container>
  );
};
