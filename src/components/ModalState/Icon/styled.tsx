import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const DialogIcon = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal)};
  align-self: center;
`;

export const DialogSuccess = styled(Icon.DialogSuccess)``;

export const DialogWarning = styled(Icon.DialogWarning)``;

export const DialogDanger = styled(Icon.DialogDanger)``;
