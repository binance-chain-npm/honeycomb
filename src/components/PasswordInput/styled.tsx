import styled from 'styled-components';

import { hcStyle } from '../../modules/themes';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;

export const TooltipContent = styled.div`
  padding: ${hcStyle.reduced()} ${hcStyle.increased()};
`;

export const Item = styled.li``;
