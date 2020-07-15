import styled, { css } from 'styled-components';
import { em } from 'polished';

export const positions = ['center', 'bottom'] as const;
export type Position = typeof positions[number];

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

const center = css`
  width: calc(100vw - ${({ theme }) => em(theme.honeycomb.size.increased * 2)});
  max-height: calc(100vh - ${({ theme }) => em(theme.honeycomb.size.increased * 2)});
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};

  @media (min-width: ${em(768)}) {
    margin: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  }
`;

const bottom = css`
  width: calc(100vw - ${({ theme }) => em(theme.honeycomb.size.increased * 2)});
  max-height: calc(100vh - ${({ theme }) => em(theme.honeycomb.size.increased)});
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  border-top-right-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  align-self: flex-end;

  @media (min-width: ${em(768)}) {
    margin: ${({ theme }) => em(theme.honeycomb.radius.increased)};
    margin-bottom: 0;
  }
`;

export const Box = styled.div<{ position: Position }>`
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  ${({ position }) => position === 'center' && center};
  ${({ position }) => position === 'bottom' && bottom};

  @media (min-width: ${em(768)}) {
    height: auto;
    width: 50vw;
    max-height: 75vh;
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
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  min-height: 100%;
  box-sizing: border-box;
`;
