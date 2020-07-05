import React from 'react';

import { Modal } from '../Modal';

import {
  DialogSuccess,
  DialogDanger,
  DialogWarning,
  DialogSvg,
  DialogTitle,
  DialogContent,
} from './styled';

export const Component = (props: any) => {
  const { variant, title, content, icon, children, ...otherProps } = props;

  const icons: any = {
    success: <DialogSuccess />,
    warning: <DialogDanger />,
    alert: <DialogWarning />,
  };

  return (
    <>
      <Modal {...otherProps}>
        <Modal.Body>
          <DialogSvg>{icon ? icon : icons[variant]}</DialogSvg>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
};

Component.displayName = 'Dialog';
