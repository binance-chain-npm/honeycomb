import { createGlobalStyle as css } from 'styled-components';

export const Styles = css`
  .tippy-tooltip {
    background: ${({ theme }) => theme.honeycomb.color.bg};
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
    border-radius: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }

  .bare-theme {
    .tippy-content {
      padding: 0;
    }
  }
`;
