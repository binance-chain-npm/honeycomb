import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { Styleless } from '../../../Styleless';

const hover = css`
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.readable(theme.color.secondary)};
`;

export const Container = styled(Styleless)<{ isShowing: boolean }>`
  background: transparent;
  height: ${({ theme }) => em(theme.size.touchable)};
  padding-left: ${({ theme }) => theme.size.scale(2)};
  ${({ theme }) => transitions(['background', 'color'], theme.duration.normal)};
  ${({ isShowing }) => isShowing && hover};

  :focus,
  :hover,
  :active {
    ${hover};
  }
`;
