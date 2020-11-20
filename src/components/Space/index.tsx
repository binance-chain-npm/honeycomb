import styled, { css } from 'styled-components';
import { em } from 'polished';

import { HoneycombThemeType } from '../../modules/themes';
import { boxSizing } from '../../modules/box-sizing';

export type Props = {
  size: keyof HoneycombThemeType['honeycomb']['size'] | 'fill';
  base?: keyof HoneycombThemeType['honeycomb']['size'];
};

const sizes = css<{ size: Props['size']; base?: Props['base'] }>`
  flex-basis: ${({ size, base, theme }) =>
    size !== 'fill' &&
    em(theme.honeycomb.size[size], base ? theme.honeycomb.size[base] : undefined)};
  flex-shrink: 0;
`;

const fill = css`
  flex: 1;
`;

export const Space = styled.div<Props>`
  ${boxSizing};
  ${({ size }) => size === 'fill' && fill};
  ${({ size }) => size !== 'fill' && sizes};
`;

Space.displayName = 'Space';
