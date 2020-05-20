import styled from 'styled-components';
import { transitions } from 'polished';

import { styleless } from '../../Styleless';
import { hcStyle } from '../../../modules/themes';

export const Container = styled.button`
  ${styleless};

  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  height: ${hcStyle.huge()};
  padding: 0 ${hcStyle.increased()};
  width: 100%;
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }
`;
