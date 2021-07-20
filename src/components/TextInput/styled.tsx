import styled, { css, DefaultTheme } from 'styled-components';
import { transitions, em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Size, normal, increased, huge, giant, fontSize } from '../internal/Size';

export type ValidationMessage = { label: React.ReactNode; state?: State; alwaysShow?: boolean };

export type State = 'success' | 'danger';

export const Container = styled.div`
  ${boxSizing};

  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Description = styled.span`
  display: block;
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
`;

const success = css`
  border-color: ${({ theme }) => theme.honeycomb.color.success.normal};

  :focus {
    border-color: ${({ theme }) => theme.honeycomb.color.success.active};
  }
`;

const danger = css`
  border-color: ${({ theme }) => theme.honeycomb.color.danger.normal};

  :focus {
    border-color: ${({ theme }) => theme.honeycomb.color.danger.active};
  }
`;

const focused = css`
  border-color: ${({ theme }) => theme.honeycomb.color.primary.normal};

  :focus {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.active};
  }
`;

type InputContainerProps = {
  state?: State;
  isFocused?: boolean;
  isPristine?: boolean;
  dynamic: boolean;
  size: Size;
  $scale: number;
  hasEnd: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  overflow: hidden;

  font-size: ${({ theme, size }) => em(fontSize({ theme, size }))};
  ${({ size }) => size === 'normal' && normal};
  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
  ${({ size }) => size === 'giant' && giant};
  ${({ size, $scale: scale }) =>
    size === 'giant' &&
    scale !== 1 &&
    css`
      height: auto;
      min-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    `};

  ${({ state }) => state === 'success' && success};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ${({ isFocused }) => isFocused && focused};
  ${({ state, isPristine }) => state === 'danger' && !isPristine && danger};
  ${({ hasEnd }) =>
    hasEnd &&
    css`
      flex-grow: 1;
    `};
`;

const dynamicFontSize = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
  switch (size) {
    case 'normal':
      return theme.honeycomb.size.small;
    case 'increased':
      return theme.honeycomb.size.small;
    case 'huge':
      return theme.honeycomb.size.reduced;
    case 'giant':
      return theme.honeycomb.size.huge;
  }
};

type InputProps = {
  dynamic: boolean;
  size: Size;
  $scale: number;
};

export const Input = styled.div<InputProps>`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  font-size: ${({ theme, size }) => em(fontSize({ theme, size }), fontSize({ theme, size }))};
  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.text.disabled};
  }

  ${({ size }) =>
    css`
      height: ${({ theme }) => em(theme.honeycomb.size[size] - 2, fontSize({ theme, size }))};
      line-height: ${({ theme }) => em(theme.honeycomb.size[size] - 2, fontSize({ theme, size }))};
    `};

  ${({ dynamic }) =>
    dynamic &&
    css`
      width: 100%;
    `};

  ${({ dynamic, size, $scale: scale }) =>
    size === 'giant' &&
    dynamic &&
    css`
      height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
      line-height: ${({ theme }) =>
        em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
      font-size: ${({ theme }) =>
        `max(calc(${em(
          dynamicFontSize({ theme, size }),
          theme.honeycomb.size.reduced,
        )} * ${scale}), ${em(theme.honeycomb.size.reduced, theme.honeycomb.size.reduced)})`};
    `};
`;

const marginSize = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
  return size === 'normal' || size === 'increased'
    ? theme.honeycomb.size.micro
    : theme.honeycomb.size.small;
};

export const Left = styled.div<Pick<InputProps, 'size'>>`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${({ theme, size }) =>
    em(marginSize({ theme, size }), theme.honeycomb.size.reduced)};
`;

export const Right = styled.div<Pick<InputProps, 'size'>>`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  margin-left: ${({ theme, size }) =>
    em(marginSize({ theme, size }), theme.honeycomb.size.reduced)};
`;

export const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  ${boxSizing};

  display: block;
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
`;

export const DynamicTextContainer = styled.div`
  width: 100%;
`;

export const DynamicText = styled.span<{ $scale: number; size: Size }>`
  font-size: ${({ theme, size }) =>
    em(dynamicFontSize({ theme, size }), fontSize({ theme, size }))};
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  transform-origin: 0 50%;
  transform: ${({ $scale: scale }) => `scale(${scale})`};
  height: 0;
  overflow: hidden;
`;

export type Props = {
  state?: State;
  isFocused?: boolean;
  isPristine?: boolean;
};

export const ValidationMessageContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ValidationMessageItem = styled.li<Props>`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  ${({ state }) =>
    state === 'success' &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.success.normal};
    `};
  ${({ state, isPristine }) =>
    state === 'danger' &&
    !isPristine &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.danger.normal};
    `};
  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};
`;
