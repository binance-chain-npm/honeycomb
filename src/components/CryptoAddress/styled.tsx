import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Button } from '../Button';
import { CopyToClipboard } from '../CopyToClipboard';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';
import { TextInput } from '../TextInput';

export const Container = styled.div`
  ${boxSizing};

  display: flex;
  align-items: center;

  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.tiny)};
  }
`;

const actionButton = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  width: calc(
    ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)} + 2px
  );
  height: calc(
    ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)} + 2px
  );
`;

export const CryptoAddress = styled(TextInput)`
  max-width: ${em(350)};

  ${TextInput.InputContainer} {
    border-radius: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  }

  ${TextInput.Input} {
    height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    line-height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    text-indent: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  }
`;

export const ScanQrCodeButton = styled(Button)`
  ${actionButton}
`;

export const CopyToClipboardButton = styled(CopyToClipboard)`
  ${actionButton}
`;

export const StyledModal = styled(Modal)`
  min-width: 0;
  width: auto;
`;

export const StyledQRCode = styled(QRCode)`
  font-size: ${em(180)};
`;
