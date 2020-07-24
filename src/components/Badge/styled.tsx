import styled, { css } from 'styled-components';
import { em, transparentize } from 'polished';

export const variants = ['success', 'warning', 'danger', 'primary'] as const;
export type Variant = typeof variants[number];

export const transparents = ['success', 'warning', 'danger', 'primary', 'buy', 'sell'] as const;
export type Transparent = typeof transparents[number];

const success = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.success.active)};
  color: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

const warning = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.warning.active)};
  color: ${({ theme }) => theme.honeycomb.color.warning.normal};
`;

const danger = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.danger.active)};
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;

const primary = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.primary.active)};
  color: ${({ theme }) => theme.honeycomb.color.primary.normal};
`;

export const Badge = styled.div<{ variant: Variant; transparent: Transparent }>`
  display: inline-block;
  border-radius: ${({ theme }) => em(theme.honeycomb.size.small)};
  padding: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.small)}
    ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.small)};
  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'warning' && warning};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'primary' && primary};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.normal)};
`;
