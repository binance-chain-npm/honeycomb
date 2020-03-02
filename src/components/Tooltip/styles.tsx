import { createGlobalStyle as css } from 'styled-components';

export const Styles = css`
  .tippy-tooltip {
    background: ${({ theme }) => theme.honeycomb.color.secondary};
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
    border-radius: 0;
  }
`;
