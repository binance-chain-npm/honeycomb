import styled from 'styled-components';
import { em } from 'polished';

export const LabelContent = styled.span`
  font-size: ${({ theme }) => em(theme.fontSize.small)};
  margin-left: ${({ theme }) => em(8, theme.fontSize.small)};
`;
