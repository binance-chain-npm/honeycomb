import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { GoldLight } from '../../modules/themes/themes/GoldLight';

export const Container = styled.div`
  ${boxSizing};

  position: relative;
  width: 1em;
  height: 1em;
  pointer-events: none;
  user-select: none;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  color: ${GoldLight.honeycomb.color.text.normal};
  line-height: 0;
`;
