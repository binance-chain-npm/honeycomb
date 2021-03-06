import { createGlobalStyle as css } from 'styled-components';

export const GlobalColors = css`
  :root {
    background: ${({ theme }) => theme.honeycomb.color.bg.masked};
    color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  }
`;
