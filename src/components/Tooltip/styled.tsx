import styled, { createGlobalStyle, css } from 'styled-components';
import { em } from 'polished';

import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';
import { boxSizing } from '../../modules/box-sizing';
import { GoldDark } from '../../modules/themes/themes/GoldDark';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { fit } from '../internal/Shape';

export const SIZES = ['reduced', 'small', 'tiny', 'micro', 'none'] as const;
export type Size = typeof SIZES[number];

export const RADII = ['increased', 'normal', 'reduced'] as const;
export type Radius = typeof RADII[number];

export const VARIANTS = ['normal', 'accent'] as const;
export type Variant = typeof VARIANTS[number];

export const SHAPES = ['fill', 'fit'] as const;
export type Shape = typeof SHAPES[number];

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

export const Target = styled.div<{ $shape?: Shape }>`
  ${({ $shape: shape }) => shape === 'fit' && fit};
`;

export const tooltip = css`
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  overflow: hidden;
`;

export const Content = styled.div<{ padding: Size; $radius: Radius; variant: Variant }>`
  ${tooltip};

  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme, padding }) =>
    padding !== 'none' &&
    css`
      ${em(theme.honeycomb.size[padding], theme.honeycomb.size.reduced)}
    `};
  border-radius: ${({ theme, $radius: radius }) =>
    em(theme.honeycomb.radius[radius], theme.honeycomb.size.reduced)};

  ${({ theme, variant }) =>
    variant === 'accent' &&
    css`
      background: ${theme.honeycomb.color.bg.tooltip.accent};
    `};
`;
