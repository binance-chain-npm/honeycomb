import React from 'react';

import { Modal } from '../Modal';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { ModalStateTitle, ModalStateContent, ModalStateChildren, Variant } from './styled';

import { ModalState } from '.';

export type Props = Testable & {
  variant: Variant;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
};

export const Component = ({
  variant,
  open = false,
  title,
  content,
  icon,
  children,
  onClose,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <>
      <Modal open={open} onClose={onClose} data-testid={buildTestId()}>
        <Modal.Body>
          <ModalState.Icon variant={variant} icon={icon} />
          <ModalStateTitle>{title}</ModalStateTitle>
          <ModalStateContent>{content}</ModalStateContent>
          {children && <ModalStateChildren>{children}</ModalStateChildren>}
        </Modal.Body>
      </Modal>
    </>
  );
};

Component.displayName = 'ModalState';
