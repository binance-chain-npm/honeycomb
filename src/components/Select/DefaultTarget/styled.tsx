import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

export const StyledListItem = styled(ListItem)`
  height: 100%;
  padding: 0;

  ${ListItem.Right} {
    font-size: ${({ theme }) => em(10, theme.honeycomb.size.reduced)};
  }
`;
