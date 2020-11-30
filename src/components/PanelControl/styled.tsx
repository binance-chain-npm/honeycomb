import styled, { css } from 'styled-components';

export const ORIENTATION = ['horizontal', 'vertical'] as const;
export type Orientation = typeof ORIENTATION[number];

export const SHAPES = ['fill', 'fit'] as const;
export type Shape = typeof SHAPES[number];

export const VARIANTS = ['outlined', 'solid'] as const;
export type Variant = typeof VARIANTS[number];

export const Styled = styled.div<{ orientation: Orientation }>`
  display: flex;
  align-items: center;

  ${({ orientation }) =>
    orientation === 'horizontal' &&
    css`
      flex-direction: row;
    `};
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      flex-direction: column;
    `};
`;
