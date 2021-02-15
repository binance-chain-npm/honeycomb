import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

export const StyledListItem = styled(ListItem)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;
