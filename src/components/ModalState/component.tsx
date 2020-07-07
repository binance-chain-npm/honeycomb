import React from 'react';

import { Modal } from '../Modal';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { TestIdContext } from './context';

export type Props = Testable & {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
};

export const Component = ({ open, children, onClose, 'data-testid': testId }: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <TestIdContext.Provider value={buildTestId()}>
      <Modal open={open} onClose={onClose} data-testid={buildTestId()}>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </TestIdContext.Provider>
  );
};

Component.displayName = 'ModalState';
