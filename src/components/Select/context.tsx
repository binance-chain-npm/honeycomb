import React from 'react';

export const Context = React.createContext<{ onClose?: () => void; testId?: string }>({});
