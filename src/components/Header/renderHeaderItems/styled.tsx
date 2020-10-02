import styled from 'styled-components';

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
