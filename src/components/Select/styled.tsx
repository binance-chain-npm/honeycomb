import styled from 'styled-components';
import { em } from 'polished';

export const Search = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
  padding-bottom: 0;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;
