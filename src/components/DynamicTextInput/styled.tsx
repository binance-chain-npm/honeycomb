import styled, { css } from 'styled-components';
import { em } from 'polished';

import { styleless } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

export const Container = styled.div`
  ${boxSizing};

  overflow: hidden;
`;

const baseStyles = css`
  font-size: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
`;

export const Text = styled.span<{ scale: number }>`
  ${baseStyles};

  position: absolute;
  display: inline-block;
  white-space: nowrap;
  transform-origin: 0 50% 0;
  transform: ${({ scale }) => `scale(${scale})`};
  height: 0;
  overflow: hidden;
`;

export const Input = styled.input<{ scale: number }>`
  ${styleless};
  ${baseStyles};

  width: 100%;
  font-size: ${({ theme, scale }) =>
    `calc(${em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)} * ${scale})`};
`;
