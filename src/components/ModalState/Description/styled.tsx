import styled from 'styled-components';
import { em } from 'polished';

export const Description = styled.div`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  text-align: center;
  margin-top: ${({ theme }) => em(theme.honeycomb.radius.normal)};
`;
