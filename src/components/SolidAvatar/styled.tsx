import styled from 'styled-components';

import { boxSizing } from '../../modules/box-sizing';

export const Svg = styled.svg`
  ${boxSizing};
  width: 1em;
  height: 1em;
  user-select: none;
  display: block;
`;
