import styled from 'styled-components';
import { em } from 'polished';

import { Dropdown } from '../../Dropdown';

export const StyledDropdownItem = styled(Dropdown.Item)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
`;
