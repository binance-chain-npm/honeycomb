import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { Styleless } from '../Styleless';
import { hcStyle } from '../../modules/themes';

export const variants = ['default', 'primary', 'success', 'danger', 'buy', 'sell'] as const;
export type Variant = typeof variants[number];

export interface Props {
  variant: Variant;
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

const disabled = css`
  border: none !important;
  background: ${({ theme }) => theme.honeycomb.color.bg.disabled} !important;
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.disabled)} !important;
  cursor: not-allowed !important;
`;

export const Styled = styled(Styleless)<Props>`
  position: relative;
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.normal)};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  border-radius: ${hcStyle.halfOf(hcStyle.huge({ forFontSize: 'reduced' }))};
  cursor: pointer;
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  padding: 0 ${hcStyle.normal({ forFontSize: 'reduced' })};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  font-weight: 600;
  font-size: ${hcStyle.reduced()};
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.active};
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'buy' && buy};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'sell' && sell};
  ${({ variant }) => variant === 'primary' && primary};
  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
