import { toast, ToastContent, ToastOptions } from 'react-toastify';

import { AUTO_CLOSE_DEFAULT_DURATION } from '../component';

type Options = {
  content: ToastContent;
  autoClose?: boolean | number;
  position: ToastOptions['position'];
  toastId?: ToastOptions['toastId'];
};

export const createToast = (content: ToastContent, options?: Options) => {
  if (!options) {
    toast(content);
    return;
  }

  const { autoClose, position, toastId } = options;

  toast(content, {
    autoClose: autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose,
    hideProgressBar: true,
    position,
    toastId,
  });
};
