import React from 'react';
import styled, { css } from 'styled-components';
import { Story } from '@storybook/react/types-6-0';

import { HoneycombThemeProvider } from '../themes';
import { HoneycombTestIdProvider } from '../test-ids';

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
  (Story: Story) => (
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
  )
];
