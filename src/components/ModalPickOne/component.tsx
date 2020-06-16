import React from 'react';

import { Modal } from '../Modal';
import { Testable } from '../../modules/test-ids';
import { TextInput } from '../TextInput';

export type Props = Testable & { open?: boolean; onClose?: () => void };

export const Component = ({ open, onClose, 'data-testid': testId }: Props) => {
  return (
    <Modal open={open} onClose={onClose} data-testid={testId}>
      <Modal.Body>
        <TextInput value="" />
        <Modal.Scroll>
          <div>
            {new Array(200).fill(null).map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
        </Modal.Scroll>
      </Modal.Body>
    </Modal>
  );
};

Component.displayName = 'ModalPickOne';
