import React, { useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Icon } from '../Icon';
import { useWindowSize } from '../internal/useWindowSize';
import { Modal } from '../Modal';
import { Tooltip } from '../Tooltip';

import {
  ButtonWrapper,
  Container,
  CryptoAddress,
  QRCodeButton,
  Size,
  StyledCopyToClipboard,
  StyledModal,
  StyledQRCode,
} from './styled';

export type Props = Testable & {
  value: string;
  text?: string;
  className?: string;
  canCopyToClipboard?: boolean;
  canScanQrCode?: boolean;
  size?: Size;
  wrap?: boolean;
};

export const Component = ({
  value,
  text,
  className,
  canCopyToClipboard = true,
  canScanQrCode = true,
  size = 'increased',
  wrap = false,
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { isSm } = useWindowSize();

  const [showQRCode, setShowQRCode] = useState(false);

  const qRCode = useMemo(() => {
    return (
      <Modal.Content>
        <StyledQRCode value={value} />
      </Modal.Content>
    );
  }, [value]);

  const scanQrCodeButton = useMemo(
    () => (
      <QRCodeButton
        variant="secondary"
        shape="square"
        size={size}
        onClick={() => setShowQRCode((value) => !value)}
        data-testid={buildTestId('btn-scan-qr-code')}
      >
        <Icon.QRCode />
      </QRCodeButton>
    ),
    [size, buildTestId],
  );

  return (
    <Container className={className} wrap={wrap} data-testid={buildTestId()}>
      <CryptoAddress size={size} data-testid={buildTestId('address')}>
        {text || value}
      </CryptoAddress>
      <ButtonWrapper wrap={wrap}>
        {canScanQrCode && (
          <>
            {isSm ? (
              <>
                {scanQrCodeButton}
                <StyledModal
                  open={showQRCode}
                  onClose={() => setShowQRCode(false)}
                  data-testid={buildTestId('modal')}
                >
                  <Modal.Header title="QR Code" />
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
                padding="none"
                radius="normal"
              >
                {scanQrCodeButton}
              </Tooltip>
            )}
          </>
        )}
        {canCopyToClipboard && (
          <StyledCopyToClipboard
            value={value}
            variant="secondary"
            shape="square"
            size={size}
            data-testid={buildTestId('btn-copy')}
          />
        )}
      </ButtonWrapper>
    </Container>
  );
};

Component.displayName = 'CryptoAddress';
