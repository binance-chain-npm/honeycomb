import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Shape as ComponentShape, fit } from '../internal/Shape';
import { Size, increased, huge, giant } from '../internal/Size';
import { styleless } from '../Styleless';

export const variants = ['segmented', 'tab'] as const;
export type Variant = typeof variants[number];

export type Shape = Omit<ComponentShape, 'square'>;

export interface ContainerProps {
  size: Size;
  shape: Shape;
  disabled?: boolean;
  variant: Variant;
}

export interface ElementProps {
  size: Size;
  active: boolean;
  variant: Variant;
}

const activeElement = css<{ variant: Variant }>`
  cursor: auto;

  ${({ variant }) =>
    (variant === 'segmented' &&
      css`
        background: ${({ theme }) => theme.honeycomb.color.primary.normal};
        color: ${({ theme }) =>
          theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};
      `) ||
    (variant === 'tab' &&
      css`
        border-bottom: 2px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
        color: ${({ theme }) => theme.honeycomb.color.primary.normal};
      `)};
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
  font-weight: 600;

  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};

  ${({ variant }) =>
    variant === 'tab' &&
    css`
      border-bottom: 2px solid transparent;
      border-radius: 0;
    `};

  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ active }) => active && activeElement}
`;

export const Container = styled.ul<ContainerProps>`
  ${styleless};
  ${boxSizing};

  display: flex;
  width: 100%;
  position: relative;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};
  padding: 0;

  ${({ shape }) => shape === 'fit' && fit};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `};

  ${({ variant }) =>
    (variant === 'segmented' &&
      css`
        background: ${({ theme }) => theme.honeycomb.color.secondary.normal};
        color: ${({ theme }) =>
          theme.honeycomb.color.readable.normal(theme.honeycomb.color.secondary.normal)};
      `) ||
    (variant === 'tab' &&
      css`
        border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
        border-radius: 0;
      `)};
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
