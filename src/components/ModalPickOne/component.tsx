import React from 'react';

import { Modal } from '../Modal';
import { Testable } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Space } from '../Space';

import { StyledBody } from './styled';

export type Props = Testable & { open?: boolean; onClose?: () => void };

export const Component = ({ open, onClose, 'data-testid': testId }: Props) => {
  return (
    <Modal open={open} onClose={onClose} data-testid={testId}>
      <StyledBody>
        <TextInput value="" />
        <Modal.Scroll>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Space size="increased" />
            {new Array(200).fill(null).map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
            <Space size="increased" />
          </div>
        </Modal.Scroll>
      </StyledBody>
    </Modal>
  );
};

Component.displayName = 'ModalPickOne';
