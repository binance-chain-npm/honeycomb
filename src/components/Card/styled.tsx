import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

export const SHADOWS = ['increased', 'normal', 'none'] as const;
export type Shadow = typeof SHADOWS[number];

export const PADDING = ['normal', 'none'] as const;
export type Padding = typeof PADDING[number];

export const POSITIONS = ['center', 'top', 'right', 'bottom', 'left'] as const;
export type Position = typeof POSITIONS[number];

export interface Props {
  outlined: boolean;
  padding: Padding;
  position: Position;
  shadow: Shadow;
}

const outline = css`
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
`;

const center = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const top = css`
  border-bottom-left-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  border-bottom-right-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const right = css`
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  border-bottom-left-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const bottom = css`
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  border-top-right-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const left = css`
  border-top-right-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  border-bottom-right-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const normal = css`
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

const none = css`
  padding: 0;
`;

export const Container = styled.div<Props>`
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  overflow: hidden;

  ${({ outlined }) => outlined && outline};

  ${({ position }) => position === 'center' && center};
  ${({ position }) => position === 'top' && top};
  ${({ position }) => position === 'right' && right};
  ${({ position }) => position === 'bottom' && bottom};
  ${({ position }) => position === 'left' && left};

  ${({ padding }) => padding === 'normal' && normal};
  ${({ padding }) => padding === 'none' && none};

  ${({ shadow }) =>
    shadow !== 'none' &&
    css`
      box-shadow: ${({ theme }) => theme.honeycomb.shadow.box[shadow]};
    `};
`;
