import React from 'react';

import { Spinner, Rect1, Rect2, Rect3, Rect4 } from './styled';

export interface Props {
  fillViewport?: boolean;
  className?: string;
}

export const Component = (props: Props) => {
  return (
    <Spinner fillViewport={props.fillViewport} className={props.className}>
      <Rect1 />
      <Rect2 />
      <Rect3 />
      <Rect4 />
    </Spinner>
  );
};

Component.displayName = 'Loading';
