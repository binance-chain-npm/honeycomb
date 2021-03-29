import styled, { DefaultTheme } from 'styled-components';
import { em } from 'polished';

import { SIZES as WINDOW_SIZES } from '../internal/useWindowSize';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';

export const mdScreen = `min-width: ${em(WINDOW_SIZES.md)}`;

export const SIZES = ['increased', 'huge'] as const;
export type Size = typeof SIZES[number];

const getBorderRadius = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
  return size === 'huge' ? theme.honeycomb.radius.normal : theme.honeycomb.radius.reduced;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (${mdScreen}) {
    flex-wrap: nowrap;
  }
`;

export const CryptoAddress = styled.span<{ size: Size }>`
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  border-radius: ${({ theme, size }) =>
    em(getBorderRadius({ theme, size }), theme.honeycomb.size.reduced)};
  height: ${({ theme, size }) => em(theme.honeycomb.size[size], theme.honeycomb.size.reduced)};
  line-height: ${({ theme, size }) => em(theme.honeycomb.size[size], theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-top: ${({ theme }) => em(theme.honeycomb.size.tiny)};

  @media (${mdScreen}) {
    flex-basis: auto;
    margin-top: 0;
  }
`;

export const StyledModal = styled(Modal)`
  min-width: 0;
  width: auto;
`;

export const StyledQRCode = styled(QRCode)`
  font-size: ${em(180)};
`;
