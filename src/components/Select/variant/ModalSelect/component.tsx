import React from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Modal } from '../../../Modal';
import { Select } from '../../../Select';

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

  return (
    <>
      {target}
      <Modal {...otherProps} loading={loading} onClose={onClose} data-testid={buildTestId()}>
        <Modal.Header title={title} />
        <Modal.Content padding="none">{children}</Modal.Content>
      </Modal>
    </>
  );
};

Component.displayName = 'ModalSelect';
