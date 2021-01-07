import styled, { css } from 'styled-components';
import { em } from 'polished';

import { GoldLight } from '../../../modules/themes/themes/GoldLight';
import { Badge } from '../../Badge';

import { ReactComponent as HeaderLogo } from './Logo.svg';
import { ReactComponent as HeaderLogoSmall } from './LogoSmall.svg';

export const Styled = styled.div`
  display: flex;
  align-items: center;
`;

const logo = css`
  flex-shrink: 0;
  fill: ${GoldLight.honeycomb.color.primary.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Logo = styled(HeaderLogo)`
  ${logo};
`;

export const LogoSmall = styled(HeaderLogoSmall)`
  ${logo};
`;

export const StyledBadge = styled(Badge)`
  white-space: nowrap;
`;
