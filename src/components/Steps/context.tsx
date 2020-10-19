import React from 'react';

import { Orientation } from './styled';

export const Context = React.createContext<{ orientation: Orientation }>({
  orientation: 'horizontal',
});
