import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../../modules/box-sizing';

export const Label = styled.label`
  ${boxSizing};

  display: block;
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
`;
