import styled, { css } from 'styled-components';

export const ORIENTATION = ['horizontal', 'vertical'] as const;
export type Orientation = typeof ORIENTATION[number];

export const Styled = styled.div<{ orientation: Orientation }>`
  display: flex;
  align-items: center;

  ${({ orientation }) =>
    orientation === 'horizontal' &&
    css`
      flex-direction: row;
      width: 100%;
    `};
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      flex-direction: column;
      height: 100%;
    `};
`;
