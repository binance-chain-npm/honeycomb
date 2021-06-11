import styled, { css, DefaultTheme } from 'styled-components';
import { em } from 'polished';

import { Button } from '../Button';
import { CopyToClipboard } from '../CopyToClipboard';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';

export const SIZES = ['increased', 'huge'] as const;
export type Size = typeof SIZES[number];

const increased = css`
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  line-height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
`;

const huge = css`
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  line-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;

export const Container = styled.div<{ $wrap: boolean }>`
  display: flex;
  align-items: center;

  ${({ $wrap: wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};
`;

export const CryptoAddress = styled.div<{ size: Size }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};

  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
`;

export const ButtonWrapper = styled.div<{ $wrap: boolean }>`
  display: flex;

  ${({ $wrap: wrap }) =>
    wrap &&
    css`
      flex-basis: 100%;
      margin-top: ${({ theme }) => em(theme.honeycomb.size.tiny)};
      margin-left: -${({ theme }) => em(theme.honeycomb.size.tiny)};
    `};
`;

const baseSize = ({ theme, size }: { theme: DefaultTheme; size: Size }) => {
  return size === 'huge' ? theme.honeycomb.size.reduced : theme.honeycomb.size.small;
};

export const QRCodeButton = styled(Button)<{ size: Size }>`
  margin-left: ${({ theme, size }) => em(theme.honeycomb.size.tiny, baseSize({ theme, size }))};
`;

export const StyledCopyToClipboard = styled(CopyToClipboard)<{ size: Size }>`
  margin-left: ${({ theme, size }) => em(theme.honeycomb.size.tiny, baseSize({ theme, size }))};
`;

export const StyledModal = styled(Modal)`
  min-width: 0;
  width: auto;
`;

export const StyledQRCode = styled(QRCode)`
  font-size: ${em(180)};
`;
