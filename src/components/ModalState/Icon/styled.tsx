import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const DialogSuccess = styled(Icon.DialogSuccess)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  align-self: center;
`;

export const DialogWarning = styled(Icon.DialogWarning)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  align-self: center;
`;

export const DialogDanger = styled(Icon.DialogDanger)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  align-self: center;
`;
