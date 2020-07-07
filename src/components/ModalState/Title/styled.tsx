import styled from 'styled-components';
import { em } from 'polished';

export const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal)};
  font-weight: bold;
`;
