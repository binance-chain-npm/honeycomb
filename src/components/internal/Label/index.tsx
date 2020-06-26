import styled from 'styled-components';
import { em } from 'polished';

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: ${({ theme }) => em(4, theme.honeycomb.size.small)};
`;
