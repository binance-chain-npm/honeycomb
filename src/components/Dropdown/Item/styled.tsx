import styled from 'styled-components';
import { transitions, em, lighten } from 'polished';

import { styleless } from '../../Styleless';

export const Container = styled.button`
  ${styleless};

  background: transparent;
  height: ${({ theme }) => em(theme.honeycomb.size.touchable)};
  padding: 0 ${({ theme }) => theme.honeycomb.size.scale(1)};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => lighten(0.025, theme.honeycomb.color.secondary)};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable(lighten(0.025, theme.honeycomb.color.secondary))};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
