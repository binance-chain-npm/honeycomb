import React from 'react';

export const Context = React.createContext<{
  open: boolean;
  onClose?: (evt: Event) => void;
  controlled: boolean;
}>({
  open: false,
  controlled: false,
});
export const ContentContext = React.createContext<{ testId?: string }>({});
