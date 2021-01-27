import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const SvgContainer = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.large)};
  align-self: center;
  display: flex;
`;

export const Success = styled(Icon.TickCircleSolid)`
  fill: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

export const Warning = styled(Icon.WarningCircleSolid)`
  fill: ${({ theme }) => theme.honeycomb.color.warning.normal};
`;

export const Danger = styled(Icon.CrossCircleSolid)`
  fill: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;
