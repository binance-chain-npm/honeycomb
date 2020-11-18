import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { styleless } from '../Styleless';

export const sizes = [
  'micro',
  'tiny',
  'small',
  'reduced',
  'normal',
  'increased',
  'huge',
  'giant',
] as const;
export type Size = typeof sizes[number];

export const weights = ['light', 'regular', 'bold'] as const;
export type Weight = typeof weights[number];

export const Styled = styled.div<{ color?: string; size?: Size; weight?: Weight }>`
  ${styleless};
  ${boxSizing};

  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
  font-weight: 400;

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
