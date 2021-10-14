import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { label } from '../Checkbox/styled';

export const SIZES = ['normal', 'increased', 'large', 'huge'] as const;
export type Size = typeof SIZES[number];

export interface Props {
  size: Size;
  checked: boolean;
}

export const padding = ({ size }: { size: Size }) => {
  return size === 'normal' || size === 'increased' ? 1 : 2;
};

export const Label = styled.label<Props>`
  ${label};

  ::before {
    border: none;
    position: relative;
    border-radius: ${({ theme, size }) => em(theme.honeycomb.size[size] / 2)};
    width: ${({ theme, size }) => em(theme.honeycomb.size[size] * 1.625)};
    height: ${({ theme, size }) => em(theme.honeycomb.size[size])};
    background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
    ${({ theme }) => transitions(['background-color'], theme.honeycomb.duration.normal)};
  }

  ${({ checked }) =>
    checked &&
    css<{ size: Size }>`
      ::before {
        background: ${({ theme }) => theme.honeycomb.color.success.normal};
      }
    `};
`;

export const Control = styled.div<Props>`
  position: absolute;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
  width: ${({ theme, size }) => em(theme.honeycomb.size[size] - padding({ size }) * 2)};
  height: ${({ theme, size }) => em(theme.honeycomb.size[size] - padding({ size }) * 2)};
  margin: ${({ size }) => em(padding({ size }))};
  box-shadow: ${GoldLight.honeycomb.shadow.box.normal};
  transition: ${({ theme }) => theme.honeycomb.duration.normal} linear;

  ${({ checked }) =>
    checked &&
    css<{ size: Size }>`
      transform: translateX(${({ theme, size }) => em(theme.honeycomb.size[size] * 0.625)});
    `};
`;
