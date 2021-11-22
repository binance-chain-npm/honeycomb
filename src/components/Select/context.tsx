import React from 'react';

import { Variant } from './component';

export const Context = React.createContext<{
  open?: boolean;
  onClose?: () => void;
  variant: Variant;
  testId?: string;
}>({ variant: 'responsive' });
