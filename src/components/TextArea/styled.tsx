import styled from 'styled-components';
import { em } from 'polished';

import { TextInput } from '../TextInput';

export const StyledTextInput = styled(TextInput)`
  ${TextInput.InputContainer} {
    height: auto;
  }

  ${TextInput.Input} {
    min-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: auto;
    text-indent: 0;
    padding: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)}
      ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    margin-left: -${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
    margin-right: -${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  }
`;
