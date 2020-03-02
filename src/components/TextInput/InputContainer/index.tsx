import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

export enum State {
  Good = 'Good',
  Danger = 'Danger',
}

const good = css`
  border-color: ${({ theme }) => theme.honeycomb.color.good};
`;

const danger = css`
  border-color: ${({ theme }) => theme.honeycomb.color.danger};
`;

const focused = css`
  border-color: ${({ theme }) => theme.honeycomb.color.primary};
`;

export const InputContainer = styled.div<{ state?: State; isFocused?: boolean }>`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border: 1px solid transparent;
  border-radius: ${({ theme }) =>
    em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.small)};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  overflow: hidden;
  ${({ state }) => state === State.Good && good};
  ${({ state }) => state === State.Danger && danger};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ${({ isFocused }) => isFocused && focused};
`;
