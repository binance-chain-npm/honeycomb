import styled from 'styled-components';

import { Dropdown } from '../../Dropdown';
import { styleless } from '../../Styleless';
import { headerItem } from '../styled';

export const StyledDefaultTarget = styled(Dropdown.DefaultTarget)`
  ${styleless};
  ${headerItem};

  display: flex;
  align-items: center;
  white-space: nowrap;
`;
