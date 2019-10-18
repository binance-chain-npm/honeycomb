import { createGlobalStyle } from 'styled-components';

import { fontFaces, fontNames } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${fontFaces};

  :root {
    box-sizing: border-box;
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.readable(theme.color.bg)};
    font-family: ${fontNames.join(
      ',',
    )}, -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
`;
