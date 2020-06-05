import styled from 'styled-components';
import { em } from 'polished';

import { TextInput } from '../TextInput';

export const StyledTextInput = styled(TextInput)`
  ${TextInput.Input} {
    min-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: auto;
    text-indent: 0;
    padding-left: ${({ theme }) =>
      em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  }
`;
