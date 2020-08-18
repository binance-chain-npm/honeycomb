import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../../Styleless';
import { boxSizing } from '../../../modules/box-sizing';
import { hoverEffect } from '../../../modules/hover-effect';

export const variants = ['normal', 'accent'] as const;
export type Variant = typeof variants[number];

const accent = css`
  font-weight: 600;
`;

const disabled = css`
  cursor: not-allowed;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.tooltip.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.tooltip.normal)};
  }
`;

const nonInteractive = css`
  cursor: auto;
  pointer-events: none;

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
  }
`;

export const Container = styled.button<{ variant: Variant; isNonInteractive: boolean }>`
  ${styleless};
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  width: 100%;
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ variant }) => variant === 'accent' && accent};

  ${hoverEffect}

  ${({ isNonInteractive }) => isNonInteractive && nonInteractive};
  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;
