import styled, { DefaultTheme } from 'styled-components';
import { em } from 'polished';

import { SIZES as WINDOW_SIZES } from '../../internal/useWindowSize';

export const mdScreen = `min-width: ${em(WINDOW_SIZES.md)}`;

export const SIZES = ['normal', 'reduced'] as const;
export type Size = typeof SIZES[number];

interface Props {
  theme: DefaultTheme;
  hasCloseButton: boolean;
  size: Size;
}

export const toastSize = ({ theme, hasCloseButton, size }: Props) => {
  const width = (() => {
    console.log(size);
    if (size === 'reduced') return 280;
    return 380;
  })();
  return hasCloseButton ? width - theme.honeycomb.size.huge : width;
};

export const Styled = styled.div<Props>`
  @media (${mdScreen}) {
    width: ${({ theme, hasCloseButton, size }) => em(toastSize({ theme, hasCloseButton, size }))};
  }
`;
