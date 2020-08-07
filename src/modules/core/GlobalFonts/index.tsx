import { createGlobalStyle as css } from 'styled-components';

import { fontFamily } from '../fonts';

export const GlobalFonts = css`
  :root {
    font-family: ${fontFamily};
  }

  body,
  *,
  *::before,
  *::after {
    font-family: inherit;
  }
`;
