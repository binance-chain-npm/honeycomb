import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { SIZES } from '../internal/useWindowSize';

export const POSITIONS = ['center', 'bottom'] as const;
export type Position = typeof POSITIONS[number];

export const mdScreen = `min-width: ${em(SIZES.md)}`;

export interface Props {
  position: Position;
}

const contentOpen = css<Props>`
  opacity: 1;
  transform: ${({ position }) => (position === 'center' ? 'scale(1)' : 'translateY(0)')};
`;

const contentClose = css<Props>`
  opacity: 0;
  transform: ${({ position }) => (position === 'center' ? 'scale(0.9)' : 'translateY(100vh)')};
`;

export const Container = styled.div`
  ${boxSizing};

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
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};

  @media (${mdScreen}) {
    margin: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  }
`;

const bottom = css`
  width: 100vw;
  max-height: calc(100vh - ${({ theme }) => em(theme.honeycomb.size.increased)});
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  border-top-right-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  align-self: flex-end;

  @media (${mdScreen}) {
    width: 100%;
    margin: ${({ theme }) => em(theme.honeycomb.radius.increased)};
    margin-bottom: 0;
  }
`;

export const Box = styled.div<Props>`
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.box.normal};
  overflow: hidden;
  ${({ position }) => position === 'center' && center};
  ${({ position }) => position === 'bottom' && bottom};

  &.ReactModal__Content {
    ${contentClose};
  }
  &.ReactModal__Content--after-open {
    ${contentOpen};
  }
  &.ReactModal__Content--before-close {
    ${contentClose};
  }

  @media (${mdScreen}) {
    height: auto;
    width: 50vw;
    max-height: min(${em(620)}, 75vh);
    max-width: ${em(500)};
  }
`;
