import styled, { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .dropdown-theme {
    &.tippy-tooltip {
      background: ${({ theme }) => theme.honeycomb.color.bg.normal};
      color: ${({ theme }) =>
        theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.normal)};
      top: 0 !important;
      left: 0;
      min-width: ${em(200)};
      font-size: 1em;
      pointer-events: all;
      overflow: hidden;
    }

    .tippy-content {
      padding: 0;
    }
  }
`;

export const TargetContainer = styled.div`
  cursor: pointer;
`;
