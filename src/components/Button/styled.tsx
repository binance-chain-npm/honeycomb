import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { Styleless } from '../Styleless';
import { hcStyle } from '../../modules/themes';

export const variants = [
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

export const sizes = ['huge', 'large'] as const;
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
  border: none !important;
  background: ${({ theme }) => theme.honeycomb.color.bg.disabled} !important;
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.disabled)} !important;
  cursor: not-allowed !important;
`;

const large = css`
  height: ${hcStyle.large({ forFontSize: 'reduced' })};
`;

export const Styled = styled(Styleless)<Props>`
  position: relative;
  border-radius: ${hcStyle.radiusNormal({ forFontSize: 'reduced' })};
  cursor: pointer;
  width: 100%;
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  padding: 0 ${hcStyle.normal({ forFontSize: 'reduced' })};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  font-weight: 600;
  font-size: ${hcStyle.reduced()};
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

  ${({ size }) => size === 'large' && large};

  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
