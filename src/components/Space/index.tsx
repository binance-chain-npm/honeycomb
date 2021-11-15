import styled, { css } from 'styled-components';

import { HoneycombThemeType } from '../../modules/themes';
import { boxSizing } from '../../modules/box-sizing';

export type Props = {
  size: keyof HoneycombThemeType['honeycomb']['size'] | 'fill';
};

const sizes = css<{ size: Props['size'] }>`
  flex-basis: ${({ size, theme }) => size !== 'fill' && theme.honeycomb.size[size]}px;
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
