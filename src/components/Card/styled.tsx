import styled, { css } from 'styled-components';
import { em } from 'polished';

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

export const Container = styled.div<{ position: Position }>`
  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  overflow: hidden;
  padding: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  ${({ position }) => position === 'center' && center};
  ${({ position }) => position === 'top' && top};
  ${({ position }) => position === 'right' && right};
  ${({ position }) => position === 'bottom' && bottom};
  ${({ position }) => position === 'left' && left};
`;
