import styled from 'styled-components';
import { em } from 'polished';

export const StyledContent = styled.div`
  min-width: ${({ theme }) => em(300, theme.honeycomb.size.reduced)};
  max-height: 75vh;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;
