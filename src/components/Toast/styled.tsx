import styled from 'styled-components';
import { em } from 'polished';

export const VARIANTS = ['success', 'danger', 'warning'] as const;
export type Variant = typeof VARIANTS[number];

export const POSITIONS = ['center', 'bottom', 'top'] as const;
export type Position = typeof POSITIONS[number];

export const Styled = styled.div`
  border-radius: 0;
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
  border-bottom-left-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.honeycomb.color.bg.normal};
  height: ${({ theme }) => em(56, theme.honeycomb.size.normal)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.normal)};
  overflow: hidden;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;

export const Box = styled.div`
  width: ${em(60)};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.reduced)};
`;
