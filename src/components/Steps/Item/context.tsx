import React from 'react';

export const Context = React.createContext<{ active: boolean; completed: boolean }>({
  active: false,
  completed: false,
});
