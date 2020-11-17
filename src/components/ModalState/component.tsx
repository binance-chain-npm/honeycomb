import React from 'react';

import { Modal } from '../Modal';
import { useBuildTestId } from '../../modules/test-ids';

import { Title, Description, StyledModal, StyledModalContent } from './styled';
import { Icon } from './Icon';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
};

export const Component = ({
  icon,
  title,
  description,
  children,
  onClose,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <StyledModal {...otherProps} data-testid={buildTestId()}>
      <Modal.Header {...otherProps} onClose={onClose}></Modal.Header>
      <StyledModalContent>
        {icon && <Icon icon={icon} />}
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
      </StyledModalContent>
    </StyledModal>
  );
};

Component.displayName = 'ModalState';
