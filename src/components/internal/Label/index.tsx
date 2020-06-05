import styled from 'styled-components';
import { em } from 'polished';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
