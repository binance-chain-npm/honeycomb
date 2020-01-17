import { createGlobalStyle as css } from 'styled-components';

export const GlobalSizing = css`
  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
