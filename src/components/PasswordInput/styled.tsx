import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Icon } from '../Icon';

export const Label = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`;

const icon = css`
  font-size: ${({ theme }) => em(10, theme.honeycomb.size.small)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.micro, 10)};
`;

export const Tick = styled(Icon.TickCircle)`
  ${icon};
`;

export const Cross = styled(Icon.CrossCircle)`
  ${icon};
`;
