import styled from 'styled-components';
import { em } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.outer};
`;

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};

  @media (min-width: ${em(768)}) {
    width: 50vw;
    height: 50vh;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;
  align-items: center;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)}
    ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
