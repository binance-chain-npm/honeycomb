import React from 'react';

export const Context = React.createContext<{ testId: string | undefined }>({
  testId: undefined,
});
