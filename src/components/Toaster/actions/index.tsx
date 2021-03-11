import { toast, ToastContent, ToastOptions } from 'react-toastify';

import { Toaster } from '../../Toaster';
import { AUTO_CLOSE_DEFAULT_DURATION } from '../component';

type Options = Pick<React.ComponentProps<typeof Toaster>, 'autoClose' | 'showCloseButton'> & {
  position?: ToastOptions['position'];
  toastId?: ToastOptions['toastId'];
  onOpen?: ToastOptions['onOpen'];
  onClose?: ToastOptions['onClose'];
};

export const createToast = (content: ToastContent, options?: Options) => {
  if (!options) {
    toast(content);
    return;
  }

  const { autoClose, position, showCloseButton, toastId, onOpen, onClose } = options;

  toast(content, {
    autoClose: autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose,
    closeButton: showCloseButton ? undefined : false,
    hideProgressBar: true,
    position,
    toastId,
    onOpen,
    onClose,
  });
};
