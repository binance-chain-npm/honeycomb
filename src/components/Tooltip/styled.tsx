import styled, { css } from 'styled-components';
import { em } from 'polished';

import { fit } from '../internal/Shape';

export const SIZES = ['reduced', 'small', 'tiny', 'micro'] as const;
export type Size = typeof SIZES[number];

export const RADII = ['increased', 'normal', 'reduced'] as const;
export type Radius = typeof RADII[number];

export const VARIANTS = ['normal', 'accent'] as const;
export type Variant = typeof VARIANTS[number];

export const SHAPES = ['fill', 'fit'] as const;
export type Shape = typeof SHAPES[number];

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

export const Content = styled.div<{ padding: Size | null; $radius: Radius; variant: Variant }>`
  ${tooltip};

  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme, padding }) =>
    padding &&
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
