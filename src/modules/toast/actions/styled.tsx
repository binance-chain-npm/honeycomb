import styled, { DefaultTheme } from 'styled-components';
import { em } from 'polished';

import { SIZES as WINDOW_SIZES } from '../../../components/internal/useWindowSize';

const WIDTHS = {
  reduced: 280,
  normal: 380,
};

export const mdScreen = `min-width: ${em(WINDOW_SIZES.md)}`;

export const SIZES = ['normal', 'reduced'] as const;
export type Size = typeof SIZES[number];

interface Props {
  theme: DefaultTheme;
  hasCloseButton: boolean;
  size: Size;
}

export const toastSize = ({ theme, hasCloseButton, size }: Props) => {
  return hasCloseButton ? WIDTHS[size] - theme.honeycomb.size.huge : WIDTHS[size];
};

export const Styled = styled.div<Props>`
  @media (${mdScreen}) {
    width: ${({ theme, hasCloseButton, size }) => em(toastSize({ theme, hasCloseButton, size }))};
  }
`;
