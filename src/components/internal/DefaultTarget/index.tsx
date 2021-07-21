import styled from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../../Styleless';
import { boxSizing } from '../../../modules/box-sizing';
import { fontSize, huge, increased } from '../Size';
import { fill, fit } from '../Shape';

export const SHAPES = ['fill', 'fit'] as const;
export type Shape = typeof SHAPES[number];

export const SIZES = ['increased', 'huge'] as const;
export type Size = typeof SIZES[number];

export const DefaultTarget = styled.div<{ shape: Shape; size: Size }>`
  ${styleless};
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  ${({ shape }) => shape === 'fill' && fill};
  ${({ shape }) => shape === 'fit' && fit};

  font-size: ${({ theme, size }) => em(fontSize({ theme, size }))};
  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
`;
