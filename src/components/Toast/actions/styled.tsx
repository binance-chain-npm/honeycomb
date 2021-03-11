import styled, { css } from 'styled-components';
import { em } from 'polished';

import { SIZES } from '../../internal/useWindowSize';

const TOAST_WIDTH = 380;

export const mdScreen = `min-width: ${em(SIZES.md)}`;

export const Styled = styled.div<{ hasCloseButton: boolean }>`
  @media (${mdScreen}) {
    width: ${em(TOAST_WIDTH)};

    ${({ hasCloseButton }) =>
      hasCloseButton &&
      css`
        width: ${({ theme }) => em(TOAST_WIDTH - theme.honeycomb.size.huge)};
      `};
  }
`;
