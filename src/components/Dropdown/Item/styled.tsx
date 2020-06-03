import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { styleless } from '../../Styleless';
import { hcStyle } from '../../../modules/themes';

export const variants = ['normal', 'accent'] as const;
export type Variant = typeof variants[number];

const accent = css`
  font-weight: 600;
`;

export const Container = styled.button<{ variant: Variant }>`
  ${styleless};

  justify-content: flex-start;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  padding: 0 ${hcStyle.increased({ forFontSize: 'reduced' })};
  width: 100%;
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ variant }) => variant === 'accent' && accent};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.accent)};
  }
`;
