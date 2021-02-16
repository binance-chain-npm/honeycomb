import React from 'react';

export const Context = React.createContext<{ isShowing: boolean; onClose?: () => void }>({
  isShowing: false,
});
export const ContentContext = React.createContext<{ testId?: string }>({});
