import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../Icon';

export const StyledVisa = styled(Icon.VisaColor)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
`;

export const StyledMastercard = styled(Icon.MastercardColor)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;
