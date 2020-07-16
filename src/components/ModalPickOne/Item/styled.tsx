import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';
import { boxSizing } from '../../../modules/box-sizing';

export const StyledListItem = styled(ListItem)`
  ${boxSizing};

  margin: 0 ${({ theme }) => em(-theme.honeycomb.size.normal)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.huge)};
  width: auto;
`;
