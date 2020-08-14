import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { styleless as stylelessCommon } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

export const sizes = ['huge', 'increased'] as const;
export type Size = typeof sizes[number];

export interface ContainerProps {
  size: Size;
  disabled?: boolean;
}

export interface ElementProps {
  size: Size;
  active: boolean;
}

const elementHugeRadius = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
`;

const elementIncreasedRadius = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
`;

const containerIncreased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
`;

const disabled = css`
  opacity: 0.3;
  pointer-events: none;
`;

const activeElement = css`
  cursor: auto;
  background: ${({ theme }) => theme.honeycomb.color.primary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};
`;

export const Element = styled.li<ElementProps>`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  ${elementHugeRadius};
  ${({ size }) => size === 'increased' && elementIncreasedRadius};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ active }) => active && activeElement}
`;

export const Container = styled.ul<ContainerProps>`
  ${stylelessCommon};
  ${boxSizing};
  height: ${({ theme }) => em(theme.honeycomb.size.huge)};
  position: relative;
  background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.normal)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  ${({ size }) => size === 'increased' && containerIncreased};
  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
`;
