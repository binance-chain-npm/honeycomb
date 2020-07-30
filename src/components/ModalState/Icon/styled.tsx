import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

export const variants = ['success', 'warning', 'danger'] as const;
export type Variant = typeof variants[number];

const success = css`
  color: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

const warning = css`
  color: ${({ theme }) => theme.honeycomb.color.warning.normal};
`;

const danger = css`
  color: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;

export const SvgContainer = styled.div<{ variant?: Variant }>`
  font-size: ${em(64)};
  align-self: center;
  display: flex;

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'warning' && warning};
  ${({ variant }) => variant === 'danger' && danger};
`;

export const Success = styled(Icon.Success)`
  fill: ${({ theme }) => theme.honeycomb.color.success.normal};
`;

export const Warning = styled(Icon.Warning)`
  fill: ${({ theme }) => theme.honeycomb.color.warning.normal};
`;

export const Danger = styled(Icon.Danger)`
  fill: ${({ theme }) => theme.honeycomb.color.danger.normal};
`;
