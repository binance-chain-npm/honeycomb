import React from 'react';

import { Modal } from '../Modal';
import { useBuildTestId } from '../../modules/test-ids';

import { Title, Description, StyledModalContent } from './styled';
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
    <Modal {...otherProps} onClose={onClose} data-testid={buildTestId()}>
      <Modal.Header {...otherProps} />
      <StyledModalContent>
        {icon && <Icon icon={icon} />}
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children}
      </StyledModalContent>
    </Modal>
  );
};

Component.displayName = 'ModalState';
