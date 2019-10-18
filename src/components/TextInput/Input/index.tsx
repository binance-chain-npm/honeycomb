import styled from 'styled-components';
import { em, transitions } from 'polished';

export const Input = styled.input`
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  background: ${({ theme }) => theme.color.secondary};
  font: inherit;
  color: ${({ theme }) => theme.color.readable(theme.color.secondary)};
  height: ${({ theme }) => em(theme.size.touchable, theme.fontSize.small)};
  border-radius: ${({ theme }) => em(theme.size.touchable / 2, theme.fontSize.small)};
  text-indent: ${({ theme }) => em(theme.size.touchable / 2, theme.fontSize.small)};
  padding-right: ${({ theme }) => em(theme.size.touchable / 2, theme.fontSize.small)};
  font-size: ${({ theme }) => em(theme.fontSize.small)};
  ${({ theme }) =>
    transitions(['color', 'background', 'border'], `${theme.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;
