import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { Toaster } from '../../Toaster';
import { AUTO_CLOSE_DEFAULT_DURATION } from '../../Toaster/component';

import { Size, Styled } from './styled';

type Options = Pick<React.ComponentProps<typeof Toaster>, 'autoClose'> & {
  position?: ToastOptions['position'];
  toastId?: ToastOptions['toastId'];
  onOpen?: ToastOptions['onOpen'];
  onClose?: ToastOptions['onClose'];
  showCloseButton?: boolean;
  size?: Size;
};

export const createToast = (content: React.ReactNode, options: Options = {}) => {
  const {
    autoClose,
    position,
    showCloseButton = true,
    size = 'normal',
    toastId,
    onOpen,
    onClose,
  } = options;

  toast(
    <Styled hasCloseButton={showCloseButton as boolean} size={size as Size}>
      {content}
    </Styled>,
    {
      autoClose: autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose,
      closeButton: showCloseButton ? undefined : false,
      hideProgressBar: true,
      position,
      toastId,
      onOpen,
      onClose,
    },
  );
};