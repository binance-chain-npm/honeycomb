import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

export const StyledListItem = styled(ListItem)`
  margin: 0 ${({ theme }) => em(-theme.honeycomb.size.normal)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.huge)};
  width: auto;
`;
