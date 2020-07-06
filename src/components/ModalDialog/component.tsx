import React from 'react';

import { Modal } from '../Modal';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import {
  DialogSuccess,
  DialogDanger,
  DialogWarning,
  DialogSvg,
  DialogTitle,
  DialogContent,
  DialogChildren,
} from './styled';

export type Props = Testable & {
  variant: string;
  title: string;
  content: string;
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

  const icons: any = {
    success: <DialogSuccess />,
    warning: <DialogDanger />,
    alert: <DialogWarning />,
  };

  return (
    <>
      <Modal open={open} onClose={onClose} data-testid={buildTestId()}>
        <Modal.Body>
          <DialogSvg>{icon ? icon : icons[variant]}</DialogSvg>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogChildren>{children}</DialogChildren>
        </Modal.Body>
      </Modal>
    </>
  );
};

Component.displayName = 'ModalDialog';
