import { createGlobalStyle as css } from 'styled-components';

import { fontNames } from '../fonts';

export const GlobalFonts = css`
  :root {
    font-family: ${fontNames.join(',')}, -apple-system, '.SFNSText-Regular', 'San Francisco',
      BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  *,
  *::before,
  *::after {
    font-family: inherit;
  }
`;
