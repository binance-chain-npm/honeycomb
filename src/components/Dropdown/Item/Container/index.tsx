import styled from 'styled-components';
import { transitions, em, lighten } from 'polished';

import { Styleless } from '../../../Styleless';

export const Container = styled(Styleless)`
  background: transparent;
  height: ${({ theme }) => em(theme.size.touchable)};
  padding: 0 ${({ theme }) => theme.size.scale(1)};
  ${({ theme }) => transitions(['background', 'color'], theme.duration.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => lighten(0.025, theme.color.secondary)};
    color: ${({ theme }) => theme.color.readable(lighten(0.025, theme.color.secondary))};
  }
`;
