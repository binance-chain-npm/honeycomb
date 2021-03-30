import styled, { css } from 'styled-components';
import { em } from 'polished';

import { SIZES as WINDOW_SIZES } from '../internal/useWindowSize';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';

export const mdScreen = `min-width: ${em(WINDOW_SIZES.md)}`;

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

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (${mdScreen}) {
    flex-wrap: nowrap;
  }
`;

export const CryptoAddress = styled.span<{ size: Size }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};

  ${({ size }) => size === 'increased' && increased};
  ${({ size }) => size === 'huge' && huge};
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
