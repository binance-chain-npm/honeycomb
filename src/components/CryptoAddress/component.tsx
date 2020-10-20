import React, { useMemo, useState } from 'react';

import { Icon } from '../Icon';
import { useWindowSize, sizes } from '../internal/useWindowSize';
import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { CopyToClipboard } from '../CopyToClipboard';

import { Container, CryptoAddress, StyledModal, StyledQRCode } from './styled';

export type Props = Testable & {
  value: string;
  text?: string;
  className?: string;
  canCopyToClipboard?: boolean;
  canScanQrCode?: boolean;
};

export const Component = ({
  value,
  text,
  className,
  canCopyToClipboard = true,
  canScanQrCode = true,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [showQRCode, setShowQRCode] = useState(false);

  const { width, height } = useWindowSize();

  const qRCode = useMemo(() => {
    return (
      <Modal.Content>
        <StyledQRCode value={value} />
      </Modal.Content>
    );
  }, [value]);

  const scanQrCodeButton = (
    <Button
      variant="secondary"
      shape="square"
      size="increased"
      onClick={() => setShowQRCode((value) => !value)}
      data-testid={buildTestId('btn-scan-qr-code')}
    >
      <Icon.QRCode />
    </Button>
  );

  return (
    <Container className={className} data-testid={buildTestId()}>
      <CryptoAddress data-testid={buildTestId('address')}>{text || value}</CryptoAddress>
      {canScanQrCode && (
        <>
          {width < sizes.md || height < sizes.md ? (
            <>
              {scanQrCodeButton}
              <StyledModal open={showQRCode} data-testid={buildTestId('modal')}>
                <Modal.Header onClose={() => setShowQRCode(false)} title="QR Code" />
                {qRCode}
              </StyledModal>
            </>
          ) : (
            <Tooltip
              placement="bottom"
              visible={showQRCode}
              interactive={true}
              content={qRCode}
              data-testid={buildTestId('tooltip')}
            >
              {scanQrCodeButton}
            </Tooltip>
          )}
        </>
      )}
      {canCopyToClipboard && (
        <CopyToClipboard
          value={value}
          variant="secondary"
          shape="square"
          size="increased"
          data-testid={buildTestId('btn-copy')}
        />
      )}
    </Container>
  );
};

Component.displayName = 'CryptoAddress';
