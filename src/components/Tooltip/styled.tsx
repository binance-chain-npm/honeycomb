import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .tippy-box {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
    border-radius: ${({ theme }) =>
      em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
    box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
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
