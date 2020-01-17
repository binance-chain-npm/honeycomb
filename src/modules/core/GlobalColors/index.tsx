import { createGlobalStyle as css } from 'styled-components';

export const GlobalColors = css`
  :root {
    background: ${({ theme }) => theme.honeycomb.color.bg};
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.bg)};
  }
`;
