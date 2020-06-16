import React from 'react';
import { FixedSizeList as List } from 'react-window';

import { Component as Modal } from '../component';
import { Testable } from '../../../modules/test-ids';
import { TextInput } from '../../TextInput';

export type Props = Testable & { open?: boolean; onClose?: () => void };

export const Component = ({ open, onClose, 'data-testid': testId }: Props) => {
  return (
    <Modal open={open} onClose={onClose} data-testid={testId}>
      <TextInput value="" />
      <List height={200} width={200} itemCount={50} itemSize={40}>
        {({ index, style }) => (
          <div key={index} style={{ ...style, paddingTop: '20px' }}>
            Hey {index}
          </div>
        )}
      </List>
    </Modal>
  );
};

Component.displayName = 'Modal.PickOne';
