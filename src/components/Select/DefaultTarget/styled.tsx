import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';
import { defaultTarget } from '../../internal/DefaultTarget';

export const StyledListItem = styled(ListItem)`
  ${defaultTarget};

  ${ListItem.Right} {
    font-size: ${({ theme }) => em(10, theme.honeycomb.size.reduced)};
  }
`;
