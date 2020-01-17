import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { Styleless } from '../../../Styleless';

const hover = css`
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
`;

export const Container = styled(Styleless)<{ isShowing: boolean }>`
  background: transparent;
  height: ${({ theme }) => em(theme.honeycomb.size.touchable)};
  padding-left: ${({ theme }) => theme.honeycomb.size.scale(2)};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ isShowing }) => isShowing && hover};

  :focus,
  :hover,
  :active {
    ${hover};
  }
`;
