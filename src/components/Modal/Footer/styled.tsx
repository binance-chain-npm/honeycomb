import styled from 'styled-components';

import { none, normal, Padding } from '../styled';

export const Footer = styled.div<{ padding: Padding }>`
  display: flex;
  flex-direction: column;

  ${({ padding }) => padding === 'normal' && normal};
  ${({ padding }) => padding === 'none' && none};
`;
