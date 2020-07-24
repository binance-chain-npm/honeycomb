import styled, { css } from 'styled-components';
import { em, transparentize } from 'polished';

export const VARIANTS = ['success', 'warning', 'danger', 'primary', 'buy', 'sell'] as const;
export type Variant = typeof VARIANTS[number];

const success = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.success.normal)};
  color: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

const warning = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.warning.normal)};
  color: ${({ theme }) => theme.honeycomb.color.text.primary};
`;

const danger = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.danger.normal)};
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;

const primary = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.primary.normal)};
  color: ${({ theme }) => theme.honeycomb.color.text.primary};
`;

const buy = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.success.normal)};
  color: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

const sell = css`
  background: ${({ theme }) => transparentize(0.9, theme.honeycomb.color.danger.normal)};
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;

export const Badge = styled.div<{ variant: Variant }>`
  display: inline-block;
  border-radius: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.small)};
  padding: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.small)}
    ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.small)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'warning' && warning};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'buy' && buy}
  ${({ variant }) => variant === 'sell' && sell};
`;
