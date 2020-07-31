import React from 'react';

export const SelectContext = React.createContext<{ onClose?: () => void; testId?: string }>({});
