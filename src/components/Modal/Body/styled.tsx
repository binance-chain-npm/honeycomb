import styled, { css } from 'styled-components';
import { em } from 'polished';

const scroll = css`
  overflow-y: auto;
`;

export const Scroll = styled.div<{ hasScroll: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  ${({ hasScroll }) => hasScroll && scroll};
`;

const padding = css`
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Body = styled.div<{ hasNoPadding: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
  ${({ hasNoPadding }) => !hasNoPadding && padding};
`;
