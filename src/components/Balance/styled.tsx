import styled from 'styled-components';
import { em } from 'polished';

export const Container = styled.span`
  text-align: center;
`;

export const BigText = styled.span`
  font-size: ${({ theme }) => em(theme.honeycomb.size.huge)};
`;

export const SmallText = styled.span`
  font-size: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
