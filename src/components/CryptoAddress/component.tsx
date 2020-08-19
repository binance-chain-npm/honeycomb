import React, { useMemo, useState } from 'react';

import { Icon } from '../Icon';
import { useWindowWidth, widths } from '../internal/useWindowWidth';
import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Modal } from '../Modal';
import { Tooltip } from '../Tooltip';

import {
  Container,
  CryptoAddress,
  ScanQrCodeButton,
  CopyToClipboardButton,
  StyledModal,
  StyledQRCode,
} from './styled';

export type Props = Testable & {
  value: string;
  className?: string;
  canCopyToClipboard?: boolean;
  canScanQrCode?: boolean;
};

export const Component = ({
  value,
  className,
  canCopyToClipboard = true,
  canScanQrCode = true,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [showQRCode, setShowQRCode] = useState(false);

  const width = useWindowWidth();

  const qRCode = useMemo(() => {
    return (
      <Modal.Content>
        <StyledQRCode value={value} />
      </Modal.Content>
    );
  }, [value]);

  const scanQrCodeButton = (
    <ScanQrCodeButton
      variant="secondary"
      shape="square"
      onClick={() => setShowQRCode((value) => !value)}
    >
      <Icon.QRCode />
    </ScanQrCodeButton>
  );

  return (
    <Container className={className} data-testid={buildTestId()}>
      <CryptoAddress readOnly value={value} />
      {canScanQrCode && (
        <>
          {width < widths.sm ? (
            <>
              {scanQrCodeButton}
              <StyledModal open={showQRCode}>
                <Modal.Header onClose={() => setShowQRCode(false)} title="QR Code" />
                {qRCode}
              </StyledModal>
            </>
          ) : (
            <Tooltip
              trigger="manual"
              placement="bottom"
              visible={showQRCode}
              interactive={true}
              content={qRCode}
            >
              {scanQrCodeButton}
            </Tooltip>
          )}
        </>
      )}
      {canCopyToClipboard && <CopyToClipboardButton value={value} />}
    </Container>
  );
};

Component.displayName = 'CryptoAddress';
