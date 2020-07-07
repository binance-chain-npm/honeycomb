import React from 'react';

import { Modal } from '../Modal';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Variant, Name, Description } from './styled';

import { ModalState } from '.';

export type Props = Testable & {
  variant: Variant;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  name?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
};

export const Component = ({
  variant,
  open,
  name,
  description,
  children,
  onClose,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <Modal open={open} onClose={onClose} data-testid={buildTestId()}>
      <Modal.Body>
        <ModalState.Icon variant={variant} />
        <Name>{name}</Name>
        <Description>{description}</Description>
        {children}
      </Modal.Body>
    </Modal>
  );
};

Component.displayName = 'ModalState';
