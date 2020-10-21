import styled, { createGlobalStyle, css } from 'styled-components';
import { em } from 'polished';

import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';
import { boxSizing } from '../../modules/box-sizing';

export const sizes = ['reduced', 'small', 'tiny', 'micro'] as const;
export type Size = typeof sizes[number];

export const variants = ['normal', 'accent'] as const;
export type Variant = typeof variants[number];

export const Styles = createGlobalStyle<{ variant: Variant }>`
  ${tippy};
  ${tippyAnimations};

  .tippy-box {
    &[data-theme='bc-honeycomb-bare'] {
      ${boxSizing};

      font-size: 1rem;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      overflow: visible;

      .tippy-content {
        padding: 0;
      }

      .tippy-arrow {
        ${({ theme, variant }) =>
          variant === 'accent' &&
          css`
            color: ${theme.honeycomb.color.bg.tooltip.accent};
          `};
      }
    }
  }
`;

export const ContentContainer = styled.div<{ radius?: Size; variant: Variant }>`
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  overflow: hidden;

  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};

  ${({ theme, radius }) =>
    radius &&
    css`
      border-radius: ${em(theme.honeycomb.size[radius], theme.honeycomb.size.reduced)};
    `};

  ${({ theme, variant }) =>
    variant === 'accent' &&
    css`
      background: ${theme.honeycomb.color.bg.tooltip.accent};
    `};
`;

export const Content = styled.div<{ padding?: Size }>`
  padding: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};

  ${({ theme, padding }) =>
    padding &&
    css`
      padding: ${em(theme.honeycomb.size[padding], theme.honeycomb.size.reduced)};
    `};
`;
