import React from 'react';
import styled, { useTheme } from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Button } from '../Button';
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
  margin-bottom: 1em;
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
    </Container>
  );
};

export const Align = () => {
  return (
    <Container>
      <Text size="small" alignSelf="start">
        accepts any CSS `align-self` / `align-items` value
      </Text>
      <Text size="small" alignSelf="start">
        `alignSelf` default="auto"
      </Text>
      <Text size="small" alignSelf="start">
        `alignItems` default="center"
      </Text>
      <Space size="normal" />
      <StyledText size="normal" alignSelf="start" alignItems="start">
        alignSelf="start"
        <Space size="normal" />
        <Button variant="primary" shape="fit">
          alignItems="start"
        </Button>
      </StyledText>
      <StyledText size="normal" alignSelf="center">
        alignSelf="center"
        <Space size="normal" />
        <Button variant="primary" shape="fit">
          alignItems="center"
        </Button>
      </StyledText>
      <StyledText size="normal" alignSelf="end" alignItems="end">
        alignSelf="end"
        <Space size="normal" />
        <Button variant="primary" shape="fit">
          alignItems="end"
        </Button>
      </StyledText>
      <StyledText size="normal" alignSelf="stretch" alignItems="stretch">
        alignSelf="stretch"
        <Space size="normal" />
        <Button variant="primary" shape="fit">
          alignItems="stretch"
        </Button>
      </StyledText>
    </Container>
  );
};
