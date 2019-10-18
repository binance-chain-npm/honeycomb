import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .dropdown-theme {
    &.tippy-tooltip {
      background: ${({ theme }) => theme.color.secondary};
      color: ${({ theme }) => theme.color.readable(theme.color.secondary)};
      top: 0 !important;
      left: 0;
      min-width: ${em(200)};
      border-radius: 0;
      font-size: 1em;
      pointer-events: all;
    }

    .tippy-content {
      padding: 0;
    }
  }
`;
