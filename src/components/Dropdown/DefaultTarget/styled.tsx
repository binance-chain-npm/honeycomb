import styled, { css } from 'styled-components';

import { DefaultTarget } from '../../internal/DefaultTarget';

export const VARIANTS = ['normal', 'accent'] as const;
export type Variant = typeof VARIANTS[number];

export const StyledDefaultTarget = styled(DefaultTarget)<{ variant: Variant; isShowing: boolean }>`
  ${({ isShowing, variant }) =>
    isShowing &&
    variant === 'accent' &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;
