import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless as stylelessCommon } from '../Styleless';

export const variants = [
  'transparent',
  'primary',
  'secondary',
  'success',
  'danger',
  'buy',
  'sell',
] as const;
export type Variant = typeof variants[number];

export const sizes = ['huge', 'increased'] as const;
export type Size = typeof sizes[number];

export const shapes = ['fill', 'fit', 'square'] as const;
export type Shape = typeof shapes[number];

export interface Props {
  variant: Variant;
  size: Size;
  shape: Shape;
  disabled?: boolean;
}

const primary = css`
  background: ${({ theme }) => theme.honeycomb.color.primary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }
`;

const secondary = css`
  background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
  color: inherit;

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.secondary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.active)};
  }
`;

const success = css`
  background: ${({ theme }) => theme.honeycomb.color.success.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.normal)};

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.success.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.active)};
  }
`;

const danger = css`
  background: ${({ theme }) => theme.honeycomb.color.danger.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.normal)};

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.danger.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.active)};
  }
`;

const buy = success;
const sell = danger;

const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
`;

const transparent = css`
  background: transparent;
  color: inherit;

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.secondary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.active)};
  }
`;

const fill = css`
  width: 100%;
`;

const fit = css`
  width: auto;
  width: fit-content;
`;

const square = css<Props>`
  width: ${({ theme, size }) => em(theme.honeycomb.size[size], theme.honeycomb.size.reduced)};
  padding: 0;
`;

export const Styled = styled.button<Props>`
  ${stylelessCommon};

  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  cursor: pointer;
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  flex-shrink: 0;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  :hover,
  :active {
    text-decoration: none;
  }

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'buy' && buy};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'sell' && sell};
  ${({ variant }) => variant === 'secondary' && secondary};
  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'transparent' && transparent};

  ${({ size }) => size === 'increased' && increased};

  ${({ shape }) => shape === 'fill' && fill};
  ${({ shape }) => shape === 'fit' && fit};
  ${({ shape }) => shape === 'square' && square};
`;
