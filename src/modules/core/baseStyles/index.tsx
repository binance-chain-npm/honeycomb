import { css } from 'styled-components';

import { fontNames } from '../fonts';

export const baseStyles = css`
  box-sizing: border-box;
  font-family: ${fontNames.join(',')}, -apple-system, '.SFNSText-Regular', 'San Francisco',
    BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
`;
