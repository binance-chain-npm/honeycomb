import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Spinner, Rect1, Rect2, Rect3, Rect4 } from './styled';

export type Props = Testable & {
  fillViewport?: boolean;
  className?: string;
  color?: string;
};

export const Component = ({ fillViewport, color, className, 'data-testid': testId }: Props) => {
  return (
    <Spinner fillViewport={fillViewport} className={className} color={color} data-testid={testId}>
      <Rect1 />
      <Rect2 />
      <Rect3 />
      <Rect4 />
    </Spinner>
  );
};

Component.displayName = 'Loading';
