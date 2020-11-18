import { css } from 'styled-components';
import { em } from 'polished';

export const SIZES = ['normal', 'increased', 'huge', 'giant'] as const;
export type Size = typeof SIZES[number];

export const normal = css`
  height: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
`;

export const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
`;

export const huge = css`
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;

export const giant = css`
  height: ${({ theme }) => em(theme.honeycomb.size.giant, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;
