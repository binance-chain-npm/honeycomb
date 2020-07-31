import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { InputContainer, baseInputStyle } from '../internal/Input';

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

export const StyledInputContainer = styled(InputContainer)<Props>`
  ${({ state }) => state === 'success' && success};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ${({ isFocused }) => isFocused && focused};
  ${({ state, isPristine }) => state === 'danger' && !isPristine && danger};
`;

export const Input = styled.input`
  ${baseInputStyle};
`;
