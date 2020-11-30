import React from 'react';

import { Orientation, Shape } from './styled';

export const Context = React.createContext<{ orientation: Orientation; shape: Shape }>({
  orientation: 'horizontal',
  shape: 'fill',
});
