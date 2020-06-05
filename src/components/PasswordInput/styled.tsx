import styled from 'styled-components';
import { em } from 'polished';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;

export const TooltipContent = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Item = styled.li``;
