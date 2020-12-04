import styled, { css } from 'styled-components';

export const SIZES = ['normal', 'increased'] as const;
export type Size = typeof SIZES[number];

export const shadowEffect = css<{ size: Size }>`
  box-shadow: ${({ theme, size }) => theme.honeycomb.shadow.box[size]};
`;

export const Styled = styled.div<{ size: Size }>`
  ${shadowEffect};
`;
