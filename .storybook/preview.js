import React from 'react';
import styled, { css } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';

import { HoneycombThemeProvider } from '../src/modules/themes';
import { HoneycombTestIdProvider } from '../src/modules/test-ids';
import { GlobalStyles } from '../src/modules/core';

const customViewports = {
  small: {
    name: 'Small Device',
    styles: {
      width: '375px',
      height: '768px',
    },
  },
  medium: {
    name: 'Medium Device',
    styles: {
      width: '768px',
      height: '1080px',
    },
  },
  large: {
    name: 'Large Device',
    styles: {
      width: '1280px',
      height: '1920px',
    },
  },
};

addParameters({
  docs: { page: null },
  viewport: {
    viewports: customViewports,
  },
});

const Container = styled.div`
  min-height: calc(100vh - 2em);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: 16px;
`;

const section = css`
  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  padding: 1em;
`;

const Section = styled.div`
  ${section};
`;

const FilledSection = styled.div`
  ${section};
  flex-grow: 1;
  flex-shrink: 0;
`;

export const decorators = [
  (Story) => (
    <Container>
      <HoneycombThemeProvider variant="accent">
        <Section>
          <HoneycombTestIdProvider value="accent">
            <Story />
          </HoneycombTestIdProvider>
        </Section>
      </HoneycombThemeProvider>
      <HoneycombThemeProvider variant="dark">
        <Section>
          <HoneycombTestIdProvider value="dark">
            <Story />
          </HoneycombTestIdProvider>
        </Section>
      </HoneycombThemeProvider>
      <HoneycombThemeProvider variant="light">
        <FilledSection>
          <HoneycombTestIdProvider value="light">
            <Story />
          </HoneycombTestIdProvider>
        </FilledSection>
      </HoneycombThemeProvider>
    </Container>
  ),
  (Story) => (
    <HoneycombThemeProvider>
      <GlobalStyles />
      <Story />
    </HoneycombThemeProvider>
  ),
];
