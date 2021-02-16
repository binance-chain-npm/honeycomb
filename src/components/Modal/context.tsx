import React from 'react';

export const Context = React.createContext<{
  testId?: string;
  loading?: boolean;
  onClose?: () => void;
}>({});
