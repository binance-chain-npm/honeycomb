import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const Styled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const Logo = styled(Icon.BinanceChainLogo)`
  flex-shrink: 0;
  fill: ${({ theme }) => theme.honeycomb.color.primary.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
