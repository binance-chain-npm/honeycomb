import React, { useMemo } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Modal } from '../../../Modal';
import { Select } from '../../../Select';
import { Context } from '../../context';

import { StyledHeader } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> &
  Omit<React.ComponentProps<typeof Select>, 'variant'> & {
    loading?: boolean;
  };

export const Component = ({
  title,
  children,
  loading,
  target,
  onClose,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);

  return (
    <>
      {target}
      <Context.Provider value={context}>
        <Modal {...otherProps} data-testid={buildTestId()}>
          <StyledHeader title={title} loading={loading} onClose={onClose} />
          <Modal.Content padding="none">{children}</Modal.Content>
        </Modal>
      </Context.Provider>
    </>
  );
};

Component.displayName = 'ModalSelect';
