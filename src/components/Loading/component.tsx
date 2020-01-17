import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';

export interface Props {
  fillViewport?: boolean;
}

const fillViewportStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => transparentize(0.4, theme.honeycomb.color.bg)};
`;

const Spinner = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.honeycomb.color.primary};
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
  height: 35px;
  width: 3px;
  display: block;
  margin-right: 6px;
  animation: ${spinnerAnimation} 1.2s infinite ease-in-out;
`;

const Rect1 = styled.div`
  ${rect};
  animation-delay: -1.1s;
`;

const Rect2 = styled.div`
  ${rect};
  animation-delay: -1s;
`;

const Rect3 = styled.div`
  ${rect};
  animation-delay: -0.9s;
`;

const Rect4 = styled.div`
  ${rect};
  animation-delay: -0.8s;
  margin-right: 0;
`;

export const Component = (props: Props) => {
  return (
    <Spinner fillViewport={props.fillViewport}>
      <Rect1 />
      <Rect2 />
      <Rect3 />
      <Rect4 />
    </Spinner>
  );
};

Component.displayName = 'Loading';
