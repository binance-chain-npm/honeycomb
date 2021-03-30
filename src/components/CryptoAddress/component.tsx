import React, { useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Button } from '../Button';
import { CopyToClipboard } from '../CopyToClipboard';
import { Icon } from '../Icon';
import { useWindowSize, SIZES } from '../internal/useWindowSize';
import { Modal } from '../Modal';
import { Tooltip } from '../Tooltip';
import { Space } from '../Space';

import { ButtonWrapper, Container, CryptoAddress, Size, StyledModal, StyledQRCode } from './styled';

export type Props = Testable & {
  value: string;
  text?: string;
  className?: string;
  canCopyToClipboard?: boolean;
  canScanQrCode?: boolean;
  size?: Size;
};

export const Component = ({
  value,
  text,
  className,
  canCopyToClipboard = true,
  canScanQrCode = true,
  size = 'increased',
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const [showQRCode, setShowQRCode] = useState(false);

  const { width } = useWindowSize();

  const isSm = useMemo(() => width < SIZES.md, [width]);

  const qRCode = useMemo(() => {
    return (
      <Modal.Content>
        <StyledQRCode value={value} />
      </Modal.Content>
    );
  }, [value]);

  const scanQrCodeButton = useMemo(
    () => (
      <Button
        variant="secondary"
        shape="square"
        size={size}
        onClick={() => setShowQRCode((value) => !value)}
        data-testid={buildTestId('btn-scan-qr-code')}
      >
        <Icon.QRCode />
      </Button>
    ),
    [size, buildTestId],
  );

  return (
    <Container className={className} data-testid={buildTestId()}>
      <CryptoAddress size={size} data-testid={buildTestId('address')}>
        {text || value}
      </CryptoAddress>
      <ButtonWrapper>
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
              <>
                <Space size="tiny" />
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
              </>
            )}
          </>
        )}
        {canCopyToClipboard && (
          <>
            <Space size="tiny" />
            <CopyToClipboard
              value={value}
              variant="secondary"
              shape="square"
              size={size}
              data-testid={buildTestId('btn-copy')}
            />
          </>
        )}
      </ButtonWrapper>
    </Container>
  );
};

Component.displayName = 'CryptoAddress';
