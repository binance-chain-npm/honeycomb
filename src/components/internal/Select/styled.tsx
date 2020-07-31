import styled from 'styled-components';
import { em } from 'polished';

export const Header = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
  padding-bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
