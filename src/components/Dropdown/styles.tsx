import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

import { baseStyles } from '../../modules/core';

export const Styles = css`
  .dropdown-theme {
    ${baseStyles};

    &.tippy-tooltip {
      background: ${({ theme }) => theme.honeycomb.color.secondary};
      color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
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
