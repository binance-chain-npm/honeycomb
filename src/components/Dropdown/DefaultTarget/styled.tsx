import styled from 'styled-components';
import { transitions, em } from 'polished';

import { Styleless } from '../../Styleless';

export const Container = styled(Styleless)<{ isShowing: boolean }>`
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border-radius: ${({ theme }) => em(theme.honeycomb.size.inputHorizontalPadding)};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  height: ${({ theme }) => em(theme.honeycomb.size.touchable)};
  padding: 0 ${({ theme }) => theme.honeycomb.size.scale(2)};
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
