import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { hcStyle } from '../../modules/themes';

export enum State {
  Good = 'Good',
  Danger = 'Danger',
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  text-indent: ${hcStyle.increased({ forFontSize: 'reduced' })};
  padding-right: ${hcStyle.increased({ forFontSize: 'reduced' })};
  font-size: ${hcStyle.reduced()};

  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.placeholder};
  }
`;

const good = css`
  border-color: ${({ theme }) => theme.honeycomb.color.good};
`;

const danger = css`
  border-color: ${({ theme }) => theme.honeycomb.color.danger};
`;

const focused = css`
  border-color: ${({ theme }) => theme.honeycomb.color.primary};
`;

export type Props = {
  state?: State;
  isFocused?: boolean;
  isPristine?: boolean;
};

export const InputContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border: 1px solid transparent;
  border-radius: ${hcStyle.halfOf(hcStyle.huge({ forFontSize: 'reduced' }))};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  overflow: hidden;
  ${({ state }) => state === State.Good && good};
  ${({ state, isPristine }) => state === State.Danger && !isPristine && danger};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ${({ isFocused }) => isFocused && focused};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding-left: ${hcStyle.increased()};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding-right: ${hcStyle.increased()};
`;
