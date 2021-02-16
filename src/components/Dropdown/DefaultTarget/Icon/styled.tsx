import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../../Icon';

const icon = css`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  margin-left: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
  flex-shrink: 0;
`;

export const Close = styled(Icon.TriangleUp)`
  ${icon};
`;

export const Open = styled(Icon.TriangleDown)`
  ${icon};
`;
