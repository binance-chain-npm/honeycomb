import React from 'react';

import { Orientation, Size } from './styled';

export const Context = React.createContext<{ orientation: Orientation; padding: Size }>({
  orientation: 'horizontal',
  padding: 'none',
});
