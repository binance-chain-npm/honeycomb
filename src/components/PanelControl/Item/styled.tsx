import styled, { css } from 'styled-components';
import { em, rgba } from 'polished';

import { fill } from '../../internal/Shape';
import { Orientation } from '../styled';

export const SIZES = ['increased', 'normal', 'reduced', 'small', 'tiny', 'micro', 'none'] as const;
export type Size = typeof SIZES[number];

export interface Props {
  selected: boolean;
  orientation: Orientation;
  padding: Size;
}

export const Styled = styled.div<Props>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};

  ${({ orientation }) =>
    (orientation === 'horizontal' &&
      css`
        flex-grow: 1;
      `) ||
    (orientation === 'vertical' &&
      css`
        ${fill};
      `)};

  padding: ${({ theme, padding }) =>
    padding !== 'none' &&
    css`
      ${em(theme.honeycomb.size[padding])}
    `};

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background-color: ${({ theme }) => rgba(theme.honeycomb.color.primary.normal, 0.1)};
    `};
`;
