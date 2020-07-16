import styled, { css, keyframes } from 'styled-components';
import { transparentize, em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

const fillViewportStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => transparentize(0.4, theme.honeycomb.color.bg.normal)};
`;

export interface Props {
  fillViewport?: boolean;
  color?: string;
}

export const Spinner = styled.div<Props>`
  ${boxSizing};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  ${({ fillViewport }) => fillViewport && fillViewportStyle};
`;

const spinnerAnimation = keyframes`
0%, 40%, 100% {
  transform: scaleY(0.4);
}

20% {
  transform: scaleY(1.0);
}
`;

const rect = css`
  background-color: currentColor;
  height: ${em(35, 35)};
  width: ${em(3, 35)};
  display: block;
  margin-right: ${em(6, 35)};
  animation: ${spinnerAnimation} 1.2s infinite ease-in-out;
`;

export const Rect1 = styled.div`
  ${rect};
  animation-delay: -1.1s;
`;

export const Rect2 = styled.div`
  ${rect};
  animation-delay: -1s;
`;

export const Rect3 = styled.div`
  ${rect};
  animation-delay: -0.9s;
`;

export const Rect4 = styled.div`
  ${rect};
  animation-delay: -0.8s;
  margin-right: 0;
`;
