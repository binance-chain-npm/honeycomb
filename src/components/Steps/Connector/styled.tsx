import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../../modules/box-sizing';
import { Orientation } from '../styled';

export const Styled = styled.div<{ size?: number; $orientation: Orientation }>`
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.border};

  ${({ size, $orientation: orientation }) =>
    orientation === 'horizontal' &&
    css`
      height: 1px;
      width: ${size ? em(size) : '100%'};
    `};
  ${({ size, $orientation: orientation }) =>
    orientation === 'vertical' &&
    css`
      height: ${size ? em(size) : '100%'};
      width: 1px;
    `};
`;
