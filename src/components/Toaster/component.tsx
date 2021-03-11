import React, { useCallback } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Icon } from '../Icon';

import { StyledButton, Styles } from './styled';

export const AUTO_CLOSE_DEFAULT_DURATION = 3000;

export type Props = Pick<
  React.ComponentPropsWithoutRef<typeof ToastContainer>,
  'position' | 'children' | 'className'
> &
  Testable & {
    autoClose?: boolean | number;
    showCloseButton?: boolean;
  };

export const Component = ({
  autoClose = true,
  showCloseButton = true,
  position = 'bottom-center',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const close = useCallback(
    ({
      closeToast,
    }: {
      closeToast: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    }) => (
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
      <ToastContainer
        {...otherProps}
        autoClose={autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose}
        closeButton={showCloseButton ? close : false}
        hideProgressBar
        newestOnTop={position === 'bottom-center'}
        position={position}
        transition={Slide}
        data-testid={buildTestId()}
      />
    </>
  );
};

Component.displayName = 'Toaster';
