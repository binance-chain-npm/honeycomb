import styled, { css, DefaultTheme } from 'styled-components';
import { em, transitions } from 'polished';
import { Property } from 'csstype';

import { Shape, fill, fit, square } from '../internal/Shape';
import { Size, normal, increased, huge, giant, fontSize } from '../internal/Size';
import { styleless as stylelessCommon } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

export const VARIANTS = [
  'transparent',
  'primary',
  'secondary',
  'success',
  'danger',
  'buy',
  'sell',
  'link',
] as const;
export type Variant = typeof VARIANTS[number];

export interface Props {
  variant: Variant;
  size: Size;
  $shape: Shape;
  disabled?: boolean;
  outlined?: boolean;
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
  :active,
  :focus,
  :focus-within {
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }

  :active {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
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

  :active {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
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
  :active,
  :focus,
  :focus-within {
    background: ${({ theme }) => theme.honeycomb.color.success.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.active)};
  }

  :active {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.success.normal};
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
  :active,
  :focus,
  :focus-within {
    background: ${({ theme }) => theme.honeycomb.color.danger.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.active)};
  }

  :active {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.danger.normal};
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

const link = css`
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.text.primary};

  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    text-decoration: underline;
  }

  ${Shadow} {
    color: transparent;
  }
`;

export const outlineColor = ({
  theme,
  variant,
}: {
  theme: DefaultTheme;
  variant: Variant;
}): {
  normal: Property.Color;
  active: Property.Color;
} => {
  switch (variant) {
    case 'transparent':
      return {
        normal: theme.honeycomb.color.text.normal,
        active: theme.honeycomb.color.primary.normal,
      };
    case 'primary':
      return {
        normal: theme.honeycomb.color.primary.normal,
        active: theme.honeycomb.color.primary.active,
      };
    case 'secondary':
      return {
        normal: theme.honeycomb.color.secondary.normal,
        active: theme.honeycomb.color.secondary.active,
      };
    case 'success':
      return {
        normal: theme.honeycomb.color.success.normal,
        active: theme.honeycomb.color.success.active,
      };
    case 'danger':
      return {
        normal: theme.honeycomb.color.danger.normal,
        active: theme.honeycomb.color.danger.active,
      };
    case 'buy':
      return {
        normal: theme.honeycomb.color.success.normal,
        active: theme.honeycomb.color.success.active,
      };
    case 'sell':
      return {
        normal: theme.honeycomb.color.danger.normal,
        active: theme.honeycomb.color.danger.active,
      };
    case 'link':
      return {
        normal: theme.honeycomb.color.primary.normal,
        active: theme.honeycomb.color.primary.active,
      };
  }
};

export const outlined = css<{ variant: Variant }>`
  border: 1px solid ${({ theme, variant }) => outlineColor({ theme, variant }).normal};
  color: ${({ theme, variant }) => outlineColor({ theme, variant }).normal};
  background: transparent;

  :hover,
  :active,
  :focus,
  :focus-within {
    border-color: ${({ theme, variant }) => outlineColor({ theme, variant }).active};
    color: ${({ theme, variant }) => outlineColor({ theme, variant }).active};
    background: transparent;
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
  flex-shrink: 0;
  position: relative;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :hover,
  :active {
    text-decoration: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `};

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'buy' && buy};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'sell' && sell};
  ${({ variant }) => variant === 'secondary' && secondary};
  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'transparent' && transparent};
  ${({ variant }) => variant === 'link' && link};

  ${({ outlined: isOutlined }) => isOutlined && outlined};

  font-size: ${({ theme, size }) => em(fontSize({ theme, size }))};
  ${({ size }) => size === 'normal' && normal};
  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};

  ${({ $shape: shape }) => shape === 'fill' && fill};
  ${({ $shape: shape }) => shape === 'fit' && fit};
  ${({ $shape: shape }) => shape === 'square' && square};
`;
