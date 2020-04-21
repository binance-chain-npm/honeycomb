import styled from 'styled-components';
import { transitions } from 'polished';

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
    background: ${({ theme }) => theme.honeycomb.color.bg.masked};
    color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
