import styled from 'styled-components';

import { boxSizing } from '../../modules/box-sizing';

import { ReactComponent as QRBg } from './qrBg.svg';

export const Container = styled.div`
  ${boxSizing};

  position: relative;
  width: 1em;
  height: 1em;
  display: flex;
`;

export const StyledQRBg = styled(QRBg)`
  width: 1em;
  height: 1em;
`;

export const QRWrapper = styled.div<{ hasFrame: boolean }>`
  position: absolute;
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    width: ${({ hasFrame }) => (hasFrame ? '0.8em' : '1em')};
    height: ${({ hasFrame }) => (hasFrame ? '0.8em' : '1em')};
  }
`;
