import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

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

export type Props = {
  state?: State;
  isFocused?: boolean;
  isPristine?: boolean;
};

export const InputContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  overflow: hidden;
  padding-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};

  ${({ state }) => state === 'success' && success};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ${({ isFocused }) => isFocused && focused};
  ${({ state, isPristine }) => state === 'danger' && !isPristine && danger};
`;

const baseTextStyles = css`
  font-size: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
`;

export const Input = styled.input<{ dynamic: boolean; scale: number }>`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  height: ${({ theme }) => em(theme.honeycomb.size.huge - 2, theme.honeycomb.size.reduced)};
  line-height: ${({ theme }) => em(theme.honeycomb.size.huge - 2, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};
  ${({ dynamic, scale }) =>
    dynamic &&
    css`
      width: 100%;
      font-size: ${({ theme }) =>
        `calc(${em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)} * ${scale})`};
    `};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;

export const DynamicTextContainer = styled.div`
  ${boxSizing};

  overflow: hidden;
  width: 100%;
`;

export const DynamicText = styled.span<{ scale: number }>`
  ${baseTextStyles};

  position: absolute;
  display: inline-block;
  white-space: nowrap;
  transform-origin: 0 50%;
  transform: ${({ scale }) => `scale(${scale})`};
  height: 0;
  overflow: hidden;
`;
