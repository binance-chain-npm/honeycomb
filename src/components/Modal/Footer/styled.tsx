import styled from 'styled-components';
import { em } from 'polished';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
