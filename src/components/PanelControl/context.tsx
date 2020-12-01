import React from 'react';

import { Orientation, Shape, Variant } from './styled';

export const Context = React.createContext<{
  orientation: Orientation;
  shape: Shape;
  variant: Variant;
  testId?: string;
}>({
  orientation: 'horizontal',
  shape: 'fill',
  variant: 'solid',
  testId: undefined,
});
