import styled from 'styled-components';
import { em } from 'polished';

export const LabelContent = styled.span`
  font-size: ${({ theme }) => em(theme.honeycomb.fontSize.small)};
  margin-left: ${({ theme }) => em(8, theme.honeycomb.fontSize.small)};
`;
