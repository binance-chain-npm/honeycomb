import styled from 'styled-components';
import { transitions } from 'polished';

import { Styleless } from '../../Styleless';
import { hcStyle } from '../../../modules/themes';

export const Container = styled(Styleless)<{ isShowing: boolean }>`
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border-radius: ${hcStyle.halfOf(hcStyle.huge())};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  height: ${hcStyle.huge()};
  padding: 0 ${hcStyle.increased()};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
