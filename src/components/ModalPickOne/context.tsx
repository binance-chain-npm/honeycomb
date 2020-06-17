import React from 'react';

export const ModalPickOneContext = React.createContext<{ onClose?: () => void; testId?: string }>(
  {},
);
