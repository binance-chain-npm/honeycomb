import styled from 'styled-components';
import { em } from 'polished';

export interface Props {
  title?: React.ReactNode;
}

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
  z-index: ${({ theme }) => theme.honeycomb.zIndexes.modals};
`;

export const Box = styled.div`
  width: calc(100vw - ${({ theme }) => em(theme.honeycomb.size.huge)});
  height: calc(100vh - ${({ theme }) => em(theme.honeycomb.size.huge)});
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};

  @media (min-width: ${em(768)}) {
    margin: ${({ theme }) => em(theme.honeycomb.radius.increased)};
    width: 50vw;
    height: auto;
    max-height: 50vh;
  }
`;

export const Header = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)}
    ${({ theme }) => em(theme.honeycomb.size.normal)}
    ${({ title, theme }) => (title ? em(theme.honeycomb.size.normal) : 0)};
  border-bottom: ${({ title, theme }) =>
    title ? `1px solid ${theme.honeycomb.color.border}` : 'none'};
`;

export const Title = styled.div`
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  margin-right: -${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  flex: 1;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.large)};
`;
