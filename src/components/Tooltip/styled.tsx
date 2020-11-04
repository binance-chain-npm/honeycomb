import styled, { createGlobalStyle, css } from 'styled-components';
import { em } from 'polished';

import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';
import { boxSizing } from '../../modules/box-sizing';
import { GoldDark } from '../../modules/themes/themes/GoldDark';
import { GoldLight } from '../../modules/themes/themes/GoldLight';

export const sizes = ['reduced', 'small', 'tiny', 'micro', 'none'] as const;
export type Size = typeof sizes[number];

export const radii = ['increased', 'normal', 'reduced'] as const;
export type Radius = typeof radii[number];

export const variants = ['normal', 'accent'] as const;
export type Variant = typeof variants[number];

export const Styles = createGlobalStyle<{ variant: Variant }>`
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

export const Target = styled.div`
  display: inline-block;
`;

export const Content = styled.div<{ padding: Size; radius: Radius; variant: Variant }>`
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  overflow: hidden;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  padding: ${({ theme, padding }) =>
    padding !== 'none' &&
    css`
      ${em(theme.honeycomb.size[padding], theme.honeycomb.size.reduced)}
    `};
  border-radius: ${({ theme, radius }) =>
    em(theme.honeycomb.radius[radius], theme.honeycomb.size.reduced)};

  ${({ theme, variant }) =>
    variant === 'accent' &&
    css`
      background: ${theme.honeycomb.color.bg.tooltip.accent};
    `};
`;
