import React, { useMemo } from 'react';

import { useBuildTestId } from '../../modules/test-ids';
import { PickOne } from '../internal/PickOne';
import { Modal } from '../Modal';

import { ModalPickOneContext } from './context';

export type Props = React.ComponentPropsWithoutRef<typeof Modal>;

export const Component = ({ onClose, 'data-testid': testId, children, ...otherProps }: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);

  return (
    <ModalPickOneContext.Provider value={context}>
      <Modal {...otherProps} onClose={onClose} data-testid={buildTestId()}>
        <PickOne>{children}</PickOne>
      </Modal>
    </ModalPickOneContext.Provider>
  );
};

Component.displayName = 'ModalPickOne';
