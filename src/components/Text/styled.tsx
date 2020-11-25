import styled, { css } from 'styled-components';
import { em } from 'polished';
import { AlignSelfProperty } from 'csstype';

import { boxSizing } from '../../modules/box-sizing';
import { styleless } from '../Styleless';

export const SIZES = [
  'micro',
  'tiny',
  'small',
  'reduced',
  'normal',
  'increased',
  'huge',
  'giant',
] as const;
export type Size = typeof SIZES[number];

export const WEIGHTS = ['light', 'regular', 'bold'] as const;
export type Weight = typeof WEIGHTS[number];

export const Styled = styled.div<{
  alignSelf?: AlignSelfProperty;
  color?: string;
  size: Size;
  weight?: Weight;
}>`
  ${styleless};
  ${boxSizing};

  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-weight: 400;

  ${({ alignSelf }) =>
    alignSelf &&
    css`
      align-self: ${alignSelf};
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ size }) =>
    size &&
    css`
      font-size: ${({ theme }) => em(theme.honeycomb.size[size])};
    `};

  ${({ weight }) =>
    weight === 'light' &&
    css`
      font-weight: 100;
    `};
  ${({ weight }) =>
    weight === 'bold' &&
    css`
      font-weight: 600;
    `};
`;
