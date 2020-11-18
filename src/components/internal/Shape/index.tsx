import { css } from 'styled-components';
import { em } from 'polished';

import { Size } from '../Size';

export const SHAPES = ['fill', 'fit', 'square'] as const;
export type Shape = typeof SHAPES[number];

export const fill = css`
  width: 100%;
`;

export const fit = css`
  width: auto;
  width: fit-content;
`;

export const square = css<{ size: Size }>`
  width: ${({ theme, size }) => em(theme.honeycomb.size[size], theme.honeycomb.size.reduced)};
  padding: 0;
`;
