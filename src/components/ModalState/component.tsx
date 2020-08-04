import React from 'react';

import { Modal } from '../Modal';
import { useBuildTestId } from '../../modules/test-ids';

import { Title, Description, StyledModal, StyledModalContent } from './styled';
import { Icon } from './Icon';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

export const Component = ({
  icon,
  title,
  description,
  children,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <StyledModal {...otherProps} data-testid={buildTestId()}>
      <Modal.Header {...otherProps}></Modal.Header>
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
