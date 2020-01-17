import { createGlobalStyle as css } from 'styled-components';

export const GlobalColors = css`
  :root {
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.readable(theme.color.bg)};
  }
`;
