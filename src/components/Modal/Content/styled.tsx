import styled from 'styled-components';

import { none, normal, Padding } from '../styled';

export const Scroll = styled.div`
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;

export const Content = styled.div<{ padding: Padding }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100%;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};

  ${({ padding }) => padding === 'normal' && normal};
  ${({ padding }) => padding === 'none' && none};
`;
