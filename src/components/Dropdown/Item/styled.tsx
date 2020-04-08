import styled from 'styled-components';
import { transitions, lighten } from 'polished';

import { styleless } from '../../Styleless';
import { hcStyle } from '../../../modules/themes';

export const Container = styled.button`
  ${styleless};

  background: transparent;
  height: ${hcStyle.huge()};
  padding: 0 ${hcStyle.increased()};
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
