import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';

export const Styles = css`
  ${tippy};
  ${tippyAnimations};

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
