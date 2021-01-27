import React, { useCallback, useMemo } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Icon } from '../Icon';

import { StyledButton, Styles } from './styled';

export type Props = Omit<
  React.ComponentPropsWithoutRef<typeof ToastContainer>,
  'closeButton' | 'hideProgressBar' | 'transition'
> &
  Testable;

export const Component = ({
  position = 'bottom-center',
  'data-testid': testId,
  ...otherProps
}: Props) => {
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

  const newestOnTop = useMemo(
    () => (position === 'bottom-center' ? true : otherProps.newestOnTop),
    [position, otherProps.newestOnTop],
  );

  return (
    <>
      <Styles />
      <ToastContainer
        {...otherProps}
        closeButton={close}
        hideProgressBar
        newestOnTop={newestOnTop}
        position={position}
        transition={Slide}
        data-testid={buildTestId()}
      />
    </>
  );
};

Component.displayName = 'Toaster';
