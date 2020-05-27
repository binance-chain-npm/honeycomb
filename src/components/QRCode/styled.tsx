import styled from 'styled-components';
import QRCode from 'qrcode.react';

import { ReactComponent as QRBg } from './qrBg.svg';

export const Container = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  display: flex;
`;

export const StyledQRBg = styled(QRBg)`
  width: 1em;
  height: 1em;
`;

export const QRWrapper = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledQRCode = styled(QRCode)<{ hasFrame: boolean }>`
  width: ${({ hasFrame }) => (hasFrame ? '0.8em' : '1em')};
  height: ${({ hasFrame }) => (hasFrame ? '0.8em' : '1em')};
`;
