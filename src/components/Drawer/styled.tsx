import styled from 'styled-components';
import { em } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: ${({ theme }) => theme.honeycomb.zIndexes.drawers};
`;

export const Box = styled.div`
  min-width: ${em(250)};
  height: 100%;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
`;
