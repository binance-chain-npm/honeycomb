import React, { useMemo } from 'react';

import { useBuildTestId } from '../../modules/test-ids';
import { PickOne } from '../internal/PickOne';
import { PickOneContext } from '../internal/PickOne/context';
import { Modal } from '../Modal';

export type Props = React.ComponentPropsWithoutRef<typeof Modal>;

export const Component = ({ onClose, 'data-testid': testId, children, ...otherProps }: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);

  return (
    <PickOneContext.Provider value={context}>
      <Modal {...otherProps} onClose={onClose} data-testid={buildTestId()}>
        <PickOne>{children}</PickOne>
      </Modal>
    </PickOneContext.Provider>
  );
};

Component.displayName = 'ModalPickOne';
