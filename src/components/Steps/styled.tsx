import styled, { css } from 'styled-components';

export const orientation = ['horizontal', 'vertical'] as const;
export type Orientation = typeof orientation[number];

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
