import styled, { css } from 'styled-components';
import { em, rgba } from 'polished';

export const SIZES = ['increased', 'normal', 'reduced', 'small', 'tiny', 'micro', 'none'] as const;
export type Size = typeof SIZES[number];

export const Styled = styled.div<{ selected: boolean; padding: Size }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  flex-grow: 1;

  padding: ${({ theme, padding }) =>
    padding !== 'none' &&
    css`
      ${em(theme.honeycomb.size[padding])}
    `};

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background-color: ${({ theme }) => rgba(theme.honeycomb.color.primary.normal, 0.1)};
    `};
`;
