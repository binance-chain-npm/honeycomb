import styled from 'styled-components';
import { em } from 'polished';

export const Content = styled.div`
  min-width: ${({ theme }) => em(300, theme.honeycomb.size.reduced)};
`;
