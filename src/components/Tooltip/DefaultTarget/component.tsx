import React from 'react';

import { Shape } from '../styled';

import { Styled } from './styled';

export type Props = {
  children: React.ReactNode;
  className?: string;
  shape?: Shape;
};

export const Component = ({ children, shape = 'fill', ...otherProps }: Props) => (
  <Styled {...otherProps} $shape={shape}>
    {children}
  </Styled>
);

Component.displayName = 'Tooltip.DefaultTarget';
