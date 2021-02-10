import styled from 'styled-components';
import { em } from 'polished';

export const DocsComponentContainer = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.increased)};
  background: ${({ theme }) => theme.honeycomb.color.text.normal};
`;
