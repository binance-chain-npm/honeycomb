import styled, { css } from 'styled-components';
import { em } from 'polished';

export interface Props {
  hasHeader: boolean;
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
    max-height: 50vh;
    max-width: ${em(500)};
  }
`;

const floating = css`
  position: absolute;
  top: 0;
  right: 0;
  border-bottom: none;
  z-index: ${({ theme }) => theme.honeycomb.zIndexes.modals + 2};
`;

export const Header = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  ${({ hasHeader }) => !hasHeader && floating};
`;

export const Title = styled.div`
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  margin-right: -${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  flex: 1;
  text-align: center;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  min-height: 100%;
`;
