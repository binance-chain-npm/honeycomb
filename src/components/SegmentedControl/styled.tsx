import styled, { css } from 'styled-components';
import { em } from 'polished';

import { styleless as stylelessCommon } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

export const sizes = ['huge', 'increased'] as const;
export type Size = typeof sizes[number];

export interface ContainerProps {
  size: Size;
  disabled?: boolean;
}

export interface ElementProps {
  active: boolean;
}

const borderRadius = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
`;

const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
`;

const activeElement = css`
  ${borderRadius}
  background: ${({ theme }) => theme.honeycomb.color.primary.normal};
`;

export const Element = styled.li<ElementProps>`
  list-style: none;
  display: grid;
  place-items: center;
  z-index: 10;
  cursor: pointer;
  height: 100%;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  ${({ active }) => active && activeElement}
`;

export const Container = styled.ul<ContainerProps>`
  ${stylelessCommon};
  ${boxSizing};

  display: grid;

  width: auto;
  width: fit-content;

  ${borderRadius}
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  position: relative;
  ${({ size }) => size === 'increased' && increased};
  background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
