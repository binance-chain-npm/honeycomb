import styled, { css } from 'styled-components';
import { em, rgba, transitions } from 'polished';

import { fill, fit } from '../../internal/Shape';
import { styleless } from '../../Styleless';
import { Orientation, Shape, Variant } from '../styled';

export interface Props {
  selected: boolean;
  orientation: Orientation;
  shape: Shape;
  variant: Variant;
}

const horizontal = css`
  flex-grow: 1;
`;

const vertical = css`
  ${fill};
`;

const outlined = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  background-color: transparent;
`;

const solid = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  background-color: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
`;

export const Styled = styled.div<Props>`
  ${styleless};

  flex-shrink: 0;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  cursor: pointer;

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  ${({ variant }) => variant === 'solid' && solid};
  ${({ variant }) => variant === 'outlined' && outlined};

  ${({ orientation }) => orientation === 'horizontal' && horizontal};
  ${({ orientation }) => orientation === 'vertical' && vertical};

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
