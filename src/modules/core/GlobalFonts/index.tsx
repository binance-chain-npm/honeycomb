import { createGlobalStyle as css } from 'styled-components';

import { fontNames } from '../fonts';

export const GlobalFonts = css`
  :root {
    font-family: ${fontNames.join(',')}, -apple-system, '.SFNSText-Regular', 'San Francisco',
      BlinkMacSystemFont, '.PingFang-SC-Regular', 'Microsoft YaHei', 'Segoe UI', 'Helvetica Neue',
      Helvetica, Arial, sans-serif;
  }

  body,
  *,
  *::before,
  *::after {
    font-family: inherit;
  }
`;
