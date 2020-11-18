import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { Shape, fill, fit, square } from '../internal/Shape';
import { Size, normal, increased, huge, giant } from '../internal/Size';
import { styleless as stylelessCommon } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';
import { Space } from '../Space';

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

export interface Props {
  variant: Variant;
  size: Size;
  shape: Shape;
  disabled?: boolean;
}

export const Shadow = styled.div`
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
`;

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

  ${Shadow} {
    color: ${({ theme }) => theme.honeycomb.color.primary.active};
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

  ${Shadow} {
    color: ${({ theme }) => theme.honeycomb.color.secondary.active};
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

  ${Shadow} {
    color: ${({ theme }) => theme.honeycomb.color.success.active};
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

  ${Shadow} {
    color: ${({ theme }) => theme.honeycomb.color.danger.active};
  }
`;

const buy = success;
const sell = danger;

const transparent = css`
  background: transparent;
  color: inherit;

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.secondary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.active)};
  }

  ${Shadow} {
    color: ${({ theme }) => theme.honeycomb.color.secondary.active};
  }
`;

export const Styled = styled.button<Props>`
  ${stylelessCommon};
  ${boxSizing};

  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  flex-shrink: 0;
  position: relative;
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

  ${({ size }) => size === 'normal' && normal};
  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};

  ${({ shape }) => shape === 'fill' && fill};
  ${({ shape }) => shape === 'fit' && fit};
  ${({ shape }) => shape === 'square' && square};
`;

export const IconSpace = styled(Space)`
  flex-basis: ${({ size, theme }) =>
    size !== 'fill' && em(theme.honeycomb.size[size], theme.honeycomb.size.reduced)};
`;
