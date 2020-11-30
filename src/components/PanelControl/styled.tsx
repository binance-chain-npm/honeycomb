import styled, { css } from 'styled-components';

export const ORIENTATION = ['horizontal', 'vertical'] as const;
export type Orientation = typeof ORIENTATION[number];

export const SIZES = ['increased', 'normal', 'reduced', 'small', 'tiny', 'micro', 'none'] as const;
export type Size = typeof SIZES[number];

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
