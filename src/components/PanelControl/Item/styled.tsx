import styled, { css } from 'styled-components';
import { em, rgba, transitions } from 'polished';

import { fill, fit } from '../../internal/Shape';
import { styleless } from '../../Styleless';
import { Orientation, Shape } from '../styled';

export interface Props {
  selected: boolean;
  orientation: Orientation;
  shape: Shape;
}

export const Styled = styled.div<Props>`
  ${styleless};

  flex-shrink: 0;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  cursor: pointer;

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  ${({ orientation }) =>
    (orientation === 'horizontal' &&
      css`
        flex-grow: 1;
      `) ||
    (orientation === 'vertical' &&
      css`
        ${fill};
      `)};

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background-color: ${({ theme }) => rgba(theme.honeycomb.color.primary.normal, 0.1)};
    `};

  ${({ shape }) =>
    shape === 'fit' &&
    css`
      flex-grow: 0;
      ${fit};
    `};

  ${({ theme }) => transitions(['background', 'border'], theme.honeycomb.duration.normal)};
`;
