import styled from 'styled-components';

import { hcStyle } from '../../../modules/themes';

export const Label = styled.label`
  display: block;
  font-size: ${hcStyle.reduced()};
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
