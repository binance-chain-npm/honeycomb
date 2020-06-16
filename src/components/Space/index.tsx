import styled from 'styled-components';
import { em } from 'polished';

import { HoneycombThemeType } from '../../modules/themes';

export type Props = { size: keyof HoneycombThemeType['honeycomb']['size'] | 'fill' };

export const Space = styled.div<Props>`
  ${({ size, theme }) => size !== 'fill' && `flex-basis: ${em(theme.honeycomb.size[size])}`};
  ${({ size }) => size === 'fill' && 'flex: 1'};
`;

Space.displayName = 'Space';
