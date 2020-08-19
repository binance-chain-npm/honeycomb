import React from 'react';

import { Icon } from '../Icon';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, CryptoAddress, StyledButton, StyledCopyToClipboard } from './styled';

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

  return (
    <Container className={className} data-testid={buildTestId()}>
      <CryptoAddress readOnly value={value} />
      {canScanQrCode && (
        <StyledButton variant="secondary" shape="square">
          <Icon.QRCode />
        </StyledButton>
      )}
      {canCopyToClipboard && <StyledCopyToClipboard value={value} />}
    </Container>
  );
};

Component.displayName = 'CryptoAddress';
