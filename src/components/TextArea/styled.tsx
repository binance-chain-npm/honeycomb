import styled from 'styled-components';
import { transitions } from 'polished';

import { hcStyle } from '../../modules/themes';

export const Input = styled.textarea`
  flex: 1;
  display: flex;
  margin: 0;
  padding: ${hcStyle.small({ forFontSize: 'reduced' })}
    ${hcStyle.increased({ forFontSize: 'reduced' })};
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  min-height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  font-size: ${hcStyle.reduced()};

  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.placeholder};
  }
`;

export { Container, InputContainer, Left, Right, State } from '../TextInput/styled';
