import styled, { css } from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

export const VARIANTS = ['normal', 'accent'] as const;
export type Variant = typeof VARIANTS[number];

const accent = css`
  font-weight: 600;
`;

export const StyledListItem = styled(ListItem)<{ variant: Variant }>`
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};

  ${({ variant }) => variant === 'accent' && accent};
`;
