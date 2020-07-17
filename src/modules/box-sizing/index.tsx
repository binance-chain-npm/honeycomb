import { css } from 'styled-components';

export const boxSizing = css`
  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
