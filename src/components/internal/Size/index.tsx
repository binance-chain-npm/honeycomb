import { css } from 'styled-components';
import { em } from 'polished';

export const sizes = ['increased', 'huge', 'giant'] as const;
export type Size = typeof sizes[number];

export const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
`;

export const huge = css`
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
`;

export const giant = css`
  height: ${({ theme }) => em(theme.honeycomb.size.giant, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) =>
    em(theme.honeycomb.radius.increased, theme.honeycomb.size.reduced)};
`;
