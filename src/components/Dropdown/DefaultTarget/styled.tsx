import styled from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../../Styleless';

export const Container = styled.div<{ isShowing: boolean }>`
  ${styleless};

  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.normal)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.accent)};
  }
`;
