import styled, { css } from 'styled-components';
import { em } from 'polished';

import { HoneycombThemeType } from '../../modules/themes';
import { boxSizing } from '../../modules/box-sizing';

export type Props = { size: keyof HoneycombThemeType['honeycomb']['size'] | 'fill' };

const sizeCss = css<{ size: Props['size'] }>`
  flex-basis: ${({ size, theme }) => size !== 'fill' && em(theme.honeycomb.size[size])};
  flex-shrink: 0;
`;

const fill = css`
  flex: 1;
`;

export const Space = styled.div<Props>`
  ${boxSizing};
  ${({ size }) => size === 'fill' && fill};
  ${({ size }) => size !== 'fill' && sizeCss};
`;

Space.displayName = 'Space';
