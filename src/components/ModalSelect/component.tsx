import React, { useMemo } from 'react';

import { useBuildTestId } from '../../modules/test-ids';
import { Select } from '../internal/Select';
import { SelectContext } from '../internal/Select/context';
import { Modal } from '../Modal';

export type Props = React.ComponentPropsWithoutRef<typeof Modal>;

export const Component = ({ onClose, 'data-testid': testId, children, ...otherProps }: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);

  return (
    <SelectContext.Provider value={context}>
      <Modal {...otherProps} onClose={onClose} data-testid={buildTestId()}>
        <Select data-testid={buildTestId()}>{children}</Select>
      </Modal>
    </SelectContext.Provider>
  );
};

Component.displayName = 'ModalSelect';
