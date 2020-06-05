import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless as stylelessCommon } from '../Styleless';

export const variants = [
  'styleless',
  'primary',
  'primary-masked',
  'secondary',
  'success',
  'success-masked',
  'danger',
  'danger-masked',
  'buy',
  'buy-masked',
  'sell',
  'sell-masked',
] as const;
export type Variant = typeof variants[number];

export const sizes = [
  'huge',
  'large',
  'increased',
  'normal',
  'fit',
  'circle-huge',
  'circle-large',
  'circle-increased',
  'circle-normal',
] as const;
export type Size = typeof sizes[number];

export interface Props {
  variant: Variant;
  size: Size;
  disabled?: boolean;
}

const primary = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.primary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }
`;

const primaryMasked = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.primary.normal};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.active};
    background: ${({ theme }) => theme.honeycomb.color.primary.masked};
    color: ${({ theme }) => theme.honeycomb.color.primary.active};
  }
`;

const secondary = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  background: transparent;
  color: inherit;

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.active};
    background: ${({ theme }) => theme.honeycomb.color.primary.masked};
    color: ${({ theme }) => theme.honeycomb.color.primary.active};
  }
`;

const success = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.success.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.success.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.active)};
  }
`;

const successMasked = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.success.normal};
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.success.normal};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.success.active};
    background: ${({ theme }) => theme.honeycomb.color.success.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.active)};
  }
`;

const buy = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.buy.normal};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.buy.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.buy.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.buy.active)};
  }
`;

const buyMasked = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.buy.normal};
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.buy.normal};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.buy.active};
    background: ${({ theme }) => theme.honeycomb.color.buy.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.buy.active)};
  }
`;

const danger = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.danger.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.danger.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.active)};
  }
`;

const dangerMasked = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.danger.normal};
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.danger.active};
    background: ${({ theme }) => theme.honeycomb.color.danger.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.danger.active)};
  }
`;

const sell = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.sell.normal};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.sell.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.sell.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.sell.active)};
  }
`;

const sellMasked = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.sell.normal};
  background: transparent;
  color: ${({ theme }) => theme.honeycomb.color.sell.normal};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.sell.active};
    background: ${({ theme }) => theme.honeycomb.color.sell.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.sell.active)};
  }
`;

const disabled = css`
  border: none;
  background: ${({ theme }) => theme.honeycomb.color.bg.disabled};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.disabled)};
  cursor: not-allowed;

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.bg.disabled};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.disabled)};
    cursor: not-allowed;
  }
`;

const large = css`
  height: ${({ theme }) => em(theme.honeycomb.size.large, theme.honeycomb.size.reduced)};
`;

const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
`;

const normal = css`
  height: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
`;

const fit = css`
  height: auto;
  height: fit-content;
  width: auto;
  width: fit-content;
`;

const circleHuge = css`
  border-radius: 50%;
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0;
`;

const circleLarge = css`
  border-radius: 50%;
  height: ${({ theme }) => em(theme.honeycomb.size.large, theme.honeycomb.size.reduced)};
  width: ${({ theme }) => em(theme.honeycomb.size.large, theme.honeycomb.size.reduced)};
  padding: 0;
`;

const circleIncreased = css`
  border-radius: 50%;
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  width: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  padding: 0;
`;

const circleNormal = css`
  border-radius: 50%;
  height: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  padding: 0;
`;

const styleless = css`
  border-radius: 0;
  background: transparent;
  color: inherit;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;

  :hover,
  :active {
    border: none;
    background: transparent;
    color: inherit;
  }

  :focus,
  :focus-within {
    box-shadow: none;
  }
`;

export const Styled = styled.button<Props>`
  ${stylelessCommon};

  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  cursor: pointer;
  width: 100%;
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'success-masked' && successMasked};
  ${({ variant }) => variant === 'buy' && buy};
  ${({ variant }) => variant === 'buy-masked' && buyMasked};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'danger-masked' && dangerMasked};
  ${({ variant }) => variant === 'sell' && sell};
  ${({ variant }) => variant === 'sell-masked' && sellMasked};
  ${({ variant }) => variant === 'secondary' && secondary};
  ${({ variant }) => variant === 'primary-masked' && primaryMasked};
  ${({ variant }) => variant === 'primary' && primary};

  ${({ disabled: isDisabled }) => isDisabled && disabled};
  ${({ variant }) => variant === 'styleless' && styleless};

  ${({ size }) => size === 'large' && large};
  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'normal' && normal};
  ${({ size }) => size === 'fit' && fit};
  ${({ size }) => size === 'circle-huge' && circleHuge};
  ${({ size }) => size === 'circle-large' && circleLarge};
  ${({ size }) => size === 'circle-increased' && circleIncreased};
  ${({ size }) => size === 'circle-normal' && circleNormal};
`;
