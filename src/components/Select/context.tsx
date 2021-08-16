import React from 'react';

import { Variant } from './component';

export const Context = React.createContext<{
  onClose?: () => void;
  variant: Variant;
  isShowing: boolean;
  testId?: string;
}>({ isShowing: false, variant: 'responsive' });
