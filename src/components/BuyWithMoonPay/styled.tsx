import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../Icon';

export const StyledVisa = styled(Icon.Visa)`
  font-size: ${({ theme }) => em(8, theme.honeycomb.size.reduced)};
`;

export const StyledMastercard = styled(Icon.Mastercard)`
  font-size: ${({ theme }) => em(8, theme.honeycomb.size.reduced)};
  margin-left: ${({ theme }) => em(4, theme.honeycomb.size.small)};
`;
