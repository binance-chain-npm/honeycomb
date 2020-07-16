import { createGlobalStyle as css } from 'styled-components';

import { boxSizing } from '../../box-sizing';

export const GlobalSizing = css`
  :root {
    ${boxSizing};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
