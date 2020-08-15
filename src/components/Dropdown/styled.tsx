import styled from 'styled-components';
import { em } from 'polished';

export const TooltipContent = styled.div`
  min-width: ${({ theme }) => em(200, theme.honeycomb.size.reduced)};
`;

export const TargetContainer = styled.div`
  cursor: pointer;
`;
