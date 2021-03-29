import React from 'react';

export const Context = React.createContext<{ active: boolean }>({
  active: false,
});
