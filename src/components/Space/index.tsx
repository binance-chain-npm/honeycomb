import styled, { css } from 'styled-components';
import { em } from 'polished';

import { HoneycombThemeType } from '../../modules/themes';

export type Props = { size: keyof HoneycombThemeType['honeycomb']['size'] | 'fill' };

const sizeCss = css<{ size: keyof HoneycombThemeType['honeycomb']['size'] }>`
  flex-basis: ${({ size, theme }) => em(theme.honeycomb.size[size])};
  flex-shrink: 0;
`;

const fill = css`
  flex: 1;
`;

export const Space = styled.div<Props>`
  ${({ size }) => size !== 'fill' && sizeCss};
  ${({ size }) => size === 'fill' && fill};
`;

Space.displayName = 'Space';
