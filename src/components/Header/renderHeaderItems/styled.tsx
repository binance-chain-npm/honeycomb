import styled from 'styled-components';
import { em } from 'polished';

import { Dropdown } from '../../Dropdown';
import { Tooltip } from '../../Tooltip';
import { headerItem } from '../styled';

export const StyledDropdown = styled(Dropdown)`
  ${Tooltip.ContentContainer} {
    border-radius: 0;
  }
`;

export const StyledDefaultTarget = styled(Dropdown.DefaultTarget)`
  ${headerItem};
`;

export const Label = styled(Dropdown.Item)`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;
