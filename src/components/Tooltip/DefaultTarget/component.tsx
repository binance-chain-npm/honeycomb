import React from 'react';

import { Shape } from '../styled';

import { Styled } from './styled';

export type Props = {
  children: React.ReactNode;
  shape?: Shape;
};

export const Component = ({ children, shape = 'fill' }: Props) => (
  <Styled $shape={shape}>{children}</Styled>
);

Component.displayName = 'Tooltip.DefaultTarget';
