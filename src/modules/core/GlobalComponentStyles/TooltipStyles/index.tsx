import { createGlobalStyle } from 'styled-components';

import tippy from '../../../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../../../node_modules/tippy.js/animations/shift-away-subtle.css';
import { boxSizing } from '../../../box-sizing';
import { GoldDark } from '../../../themes/themes/GoldDark';
import { GoldLight } from '../../../themes/themes/GoldLight';

export const Styles = createGlobalStyle`
  ${tippy};
  ${tippyAnimations};

  .tippy-box {
    &[data-theme*='bc-honeycomb-bare'] {
      ${boxSizing};

      font-size: 1rem;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      overflow: visible;

      .tippy-content {
        padding: 0;
        z-index: ${({ theme }) => theme.honeycomb.zIndexes.tooltips};
      }

      .tippy-arrow {
        z-index: ${({ theme }) => theme.honeycomb.zIndexes.tooltips + 2};
      }

      &[data-theme*='-GoldDark-normal'] {
        .tippy-arrow {
          color: ${GoldDark.honeycomb.color.bg.tooltip.normal};
        }
      }

      &[data-theme*='-GoldLight-normal'] {
        .tippy-arrow {
          color: ${GoldLight.honeycomb.color.bg.tooltip.normal};
        }
      }

      &[data-theme*='-GoldDark-accent'] {
        .tippy-arrow {
          color: ${GoldDark.honeycomb.color.bg.tooltip.accent};
        }
      }

      &[data-theme*='-GoldLight-accent'] {
        .tippy-arrow {
          color: ${GoldLight.honeycomb.color.bg.tooltip.accent};
        }
      }
    }
  }
`;
