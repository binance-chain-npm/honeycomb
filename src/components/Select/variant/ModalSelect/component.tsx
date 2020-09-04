import React, { useMemo } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Modal } from '../../../Modal';
import { Select } from '../../../Select';
import { SelectContext } from '../../context';

import { StyledHeader } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> &
  Omit<React.ComponentProps<typeof Select>, 'variant'> & {
    isLoading?: boolean;
  };

export const Component = ({
  title,
  children,
  isLoading,
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
      <SelectContext.Provider value={context}>
        <Modal {...otherProps} data-testid={buildTestId()}>
          <StyledHeader title={title} isLoading={isLoading} onClose={onClose} />
          <Modal.Content padding="none">{children}</Modal.Content>
        </Modal>
      </SelectContext.Provider>
    </>
  );
};

Component.displayName = 'ModalSelect';
