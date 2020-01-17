import styled from 'styled-components';
import { em, transitions } from 'polished';

export const Input = styled.input`
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  font: inherit;
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  height: ${({ theme }) => em(theme.honeycomb.size.touchable, theme.honeycomb.fontSize.small)};
  border-radius: ${({ theme }) =>
    em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.small)};
  text-indent: ${({ theme }) =>
    em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.small)};
  padding-right: ${({ theme }) =>
    em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.small)};
  font-size: ${({ theme }) => em(theme.honeycomb.fontSize.small)};
  ${({ theme }) =>
    transitions(
      ['color', 'background', 'border'],
      `${theme.honeycomb.duration.normal} ease-in-out`,
    )};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.placeholder};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.honeycomb.color.primary};
  }
`;
