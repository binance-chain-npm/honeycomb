import styled from 'styled-components';
import { em, transitions } from 'polished';

import { styleless } from '../../Styleless';

export const Container = styled.button`
  ${styleless};

  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  justify-content: flex-start;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)}
    ${({ theme }) => em(theme.honeycomb.size.increased)};
  cursor: pointer;
  ${({ theme }) => transitions(['background'], theme.honeycomb.duration.normal)};

  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
  }
`;

export const Content = styled.div``;
