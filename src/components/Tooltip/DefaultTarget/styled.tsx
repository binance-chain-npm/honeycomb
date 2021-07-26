import { transitions } from 'polished';
import styled from 'styled-components';

import { Shape as ComponentShape, fill, fit } from '../../internal/Shape';
import { styleless } from '../../Styleless';

export type Shape = Omit<ComponentShape, 'square'>;

export const Styled = styled.div<{ $shape: Shape }>`
  ${styleless};
  cursor: default;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  ${({ theme }) => transitions(['color'], theme.honeycomb.duration.normal)};

  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};

    svg {
      fill: ${({ theme }) => theme.honeycomb.color.primary.normal};
    }
  }

  ${({ $shape: shape }) => shape === 'fill' && fill};
  ${({ $shape: shape }) => shape === 'fit' && fit};
`;
