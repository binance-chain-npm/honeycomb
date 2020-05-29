import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  pointer-events: none;
  user-select: none;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  font-size: 0.75em;
  text-transform: uppercase;
`;
