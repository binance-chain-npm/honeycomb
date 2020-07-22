import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

export type ValidationMessage = { label: React.ReactNode; state?: State };

export type State = 'success' | 'danger';

const success = css`
  color: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

const danger = css`
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};
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
  margin-top: ${({ theme }) => em(4, theme.honeycomb.size.small)};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  ${({ state }) => state === 'success' && success};
  ${({ state, isPristine }) => state === 'danger' && !isPristine && danger};
  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};
`;
