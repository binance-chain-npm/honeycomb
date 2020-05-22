import styled from 'styled-components';

import { TextInput } from '../TextInput';
import { hcStyle } from '../../modules/themes';

export const StyledTextInput = styled(TextInput)`
  ${TextInput.Input} {
    min-height: ${hcStyle.huge({ forFontSize: 'reduced' })};
    text-indent: 0;
    padding-left: ${hcStyle.increased({ forFontSize: 'reduced' })};
  }
`;
