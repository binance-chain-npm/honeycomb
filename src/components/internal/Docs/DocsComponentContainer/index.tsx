import styled from 'styled-components';
import { em } from 'polished';

export const DocsComponentContainer = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  background: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin: ${({ theme }) => em(theme.honeycomb.size.increased)} 0;
`;
