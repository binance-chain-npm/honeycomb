import React from 'react';

import { Modal } from '../Modal';
import { useBuildTestId } from '../../modules/test-ids';

import { Variant, Title, Description, StyledModal } from './styled';
import { Icon } from './Icon';

export type Props = React.ComponentPropsWithoutRef<typeof Modal> & {
  variant: Variant;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

export const Component = ({
  variant,
  title,
  description,
  children,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <StyledModal {...otherProps} data-testid={buildTestId()}>
      <Icon variant={variant} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </StyledModal>
  );
};

Component.displayName = 'ModalState';
