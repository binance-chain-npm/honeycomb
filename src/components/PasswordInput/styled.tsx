import styled from 'styled-components';
import { em } from 'polished';

export const List = styled.ul`
  margin: 0;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small)};
  list-style-type: none;
`;

export const Item = styled.li`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.small)};
  display: flex;
  align-items: center;
`;
