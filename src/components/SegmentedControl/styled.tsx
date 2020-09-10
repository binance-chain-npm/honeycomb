import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Shape as ComponentShape } from '../internal/Shape';
import { Size } from '../internal/Size';
import { styleless } from '../Styleless';

export type Shape = Omit<ComponentShape, 'square'>;

export interface ContainerProps {
  size: Size;
  shape: Shape;
  disabled?: boolean;
}

export interface ElementProps {
  size: Size;
  active: boolean;
}

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
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};

  ${({ size }) =>
    size === 'increased' &&
    css`
      border-radius: ${({ theme }) =>
        em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
    `};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ active }) => active && activeElement}
`;

export const Container = styled.ul<ContainerProps>`
  ${styleless};
  ${boxSizing};

  display: flex;
  width: 100%;
  height: ${({ theme }) => em(theme.honeycomb.size.huge)};
  position: relative;
  background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.normal)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};

  ${({ size }) =>
    size === 'increased' &&
    css`
      height: ${({ theme }) => em(theme.honeycomb.size.increased)};
      border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
    `};
  ${({ shape }) =>
    shape === 'fit' &&
    css`
      width: auto;
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `};
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
