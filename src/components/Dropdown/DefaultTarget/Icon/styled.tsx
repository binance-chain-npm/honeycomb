import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../../Icon';

const icon = css`
  font-size: ${({ theme }) => em(10, theme.honeycomb.size.reduced)};
  margin-left: ${({ theme }) => em(theme.honeycomb.size.micro, 10)};
  flex-shrink: 0;
`;

export const Close = styled(Icon.CaretUp)`
  ${icon};
`;

export const Open = styled(Icon.CaretDown)`
  ${icon};
`;
