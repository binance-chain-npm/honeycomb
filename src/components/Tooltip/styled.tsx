import { createGlobalStyle as css } from 'styled-components';

import { hcStyle } from '../../modules/themes';

export const Styles = css`
  .tippy-box {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
    border-radius: ${hcStyle.radiusNormal()};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    font-size: ${hcStyle.reduced()};
    overflow: hidden;

    &[data-theme='tooltip'] {
      .tippy-content {
        padding: ${hcStyle.halfOf(hcStyle.small({ forFontSize: 'reduced' }))}
          ${hcStyle.small({ forFontSize: 'reduced' })};
      }
    }
  }
`;
