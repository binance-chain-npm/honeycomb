import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

export const VARIANTS = ['default', 'bare'] as const;
export type Variant = typeof VARIANTS[number];

export const POSITIONS = ['center', 'top', 'right', 'bottom', 'left'] as const;
export type Position = typeof POSITIONS[number];

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

const variantDefault = css`
  padding: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

const variantBare = css`
  padding: 0;
`;

export const Container = styled.div<{ position: Position; variant: Variant }>`
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  overflow: hidden;

  ${({ position }) => position === 'center' && center};
  ${({ position }) => position === 'top' && top};
  ${({ position }) => position === 'right' && right};
  ${({ position }) => position === 'bottom' && bottom};
  ${({ position }) => position === 'left' && left};

  ${({ variant }) => variant === 'default' && variantDefault};
  ${({ variant }) => variant === 'bare' && variantBare};
`;
