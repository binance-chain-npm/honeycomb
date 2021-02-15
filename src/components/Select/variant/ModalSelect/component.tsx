import React, { useMemo } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Modal } from '../../../Modal';
import { Select } from '../../../Select';
import { Context } from '../../context';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> &
  React.ComponentProps<typeof Select> & {
    loading?: boolean;
  };

export const Component = ({
  title,
  children,
  loading,
  target,
  variant,
  onClose,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const context = useMemo(() => ({ isShowing: otherProps.open, onClose, variant, testId }), [
    otherProps.open,
    onClose,
    variant,
    testId,
  ]);

  return (
    <>
      {target}
      <Context.Provider value={context}>
        <Modal {...otherProps} data-testid={buildTestId()}>
          <Modal.Header title={title} loading={loading} onClose={onClose} />
          <Modal.Content padding="none">{children}</Modal.Content>
        </Modal>
      </Context.Provider>
    </>
  );
};

Component.displayName = 'ModalSelect';
