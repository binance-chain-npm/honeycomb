import styled, { css } from 'styled-components';
import { em } from 'polished';
import { Property } from 'csstype';

import { boxSizing } from '../../modules/box-sizing';

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
  alignItems?: Property.AlignItems;
  alignSelf?: Property.AlignSelf;
  $color?: string;
  size: Size;
  weight?: Weight;
}>`
  ${boxSizing};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-weight: 400;

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ alignSelf }) =>
    alignSelf &&
    css`
      align-self: ${alignSelf};
    `};

  ${({ $color: color }) =>
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
