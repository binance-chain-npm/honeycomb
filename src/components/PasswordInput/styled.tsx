import styled from 'styled-components';
import { em } from 'polished';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;

export const TooltipContent = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.inputHorizontalPadding / 2)}
    ${({ theme }) => em(theme.honeycomb.size.inputHorizontalPadding)};
`;

export const Item = styled.li``;
