import { createGlobalStyle as css } from 'styled-components';

import { baseStyles } from '../../modules/core';

export const Styles = css`
  .tippy-tooltip {
    ${baseStyles};
    background: ${({ theme }) => theme.honeycomb.color.secondary};
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
    border-radius: 0;
  }
`;
