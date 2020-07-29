import React from 'react';

export const PickOneContext = React.createContext<{ onClose?: () => void; testId?: string }>({});
