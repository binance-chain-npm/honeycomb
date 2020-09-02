import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';

export const Container = styled.div`
  ${boxSizing};

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.tiny)};
  }
`;

export const CryptoAddress = styled.span`
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced, theme.honeycomb.size.reduced)};
  height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  line-height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledModal = styled(Modal)`
  min-width: 0;
  width: auto;
`;

export const StyledQRCode = styled(QRCode)`
  font-size: ${em(180)};
`;
