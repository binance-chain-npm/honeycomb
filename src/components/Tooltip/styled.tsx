import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .tippy-box {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
    border-radius: ${({ theme }) =>
      em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
    overflow: hidden;

    &[data-theme='tooltip'] {
      .tippy-content {
        padding: ${({ theme }) => em(theme.honeycomb.size.small / 2, theme.honeycomb.size.reduced)}
          ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
      }
    }
  }
`;
