import styled, { css } from 'styled-components';
import { em, rgba, transitions } from 'polished';

import { fill } from '../../internal/Shape';
import { styleless } from '../../Styleless';
import { Orientation, Size } from '../styled';

export interface Props {
  selected: boolean;
  orientation: Orientation;
  padding: Size;
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

  padding: ${({ theme, padding }) =>
    padding !== 'none' &&
    css`
      ${em(theme.honeycomb.size[padding])}
    `};

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background-color: ${({ theme }) => rgba(theme.honeycomb.color.primary.normal, 0.1)};
    `};

  ${({ theme }) => transitions(['background', 'border'], theme.honeycomb.duration.normal)};
`;
