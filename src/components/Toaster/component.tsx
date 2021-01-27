import React, { useCallback } from 'react';
import { ToastContainer } from 'react-toastify';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Icon } from '../Icon';

import { StyledButton, Styles } from './styled';

type ToastContainerProps = React.ComponentPropsWithoutRef<typeof ToastContainer>;

export type Props = Omit<ToastContainerProps, 'closeButton'> & Testable;

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const close = useCallback(
    ({ closeToast }: { closeToast: any }) => (
      <StyledButton
        variant="secondary"
        size="increased"
        shape="square"
        data-testid={buildTestId('close-btn')}
        onClick={closeToast}
      >
        <Icon.Cross />
      </StyledButton>
    ),
    [buildTestId],
  );

  return (
    <>
      <Styles />
      <ToastContainer {...otherProps} closeButton={close} data-testid={testId} />
    </>
  );
};

Component.displayName = 'Toaster';
