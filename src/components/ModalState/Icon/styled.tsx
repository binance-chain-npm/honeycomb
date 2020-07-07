import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const Svg = styled.svg`
  font-size: ${em(64)};
  align-self: center;
  width: 1em;
  height: 1em;
`;

export const Success = styled(Icon.Success)`
  fill: ${({ theme }) => theme.honeycomb.color.fill.success};
`;

export const Warning = styled(Icon.Warning)`
  fill: ${({ theme }) => theme.honeycomb.color.fill.warning};
`;

export const Danger = styled(Icon.Danger)`
  fill: ${({ theme }) => theme.honeycomb.color.fill.danger};
`;
