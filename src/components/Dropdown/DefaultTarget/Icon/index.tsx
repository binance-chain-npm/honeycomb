import { Component } from './component';
import { TriangleUp, TriangleDown } from './styled';

export const Icon = Component as typeof Component & {
  TriangleUp: typeof TriangleUp;
  TriangleDown: typeof TriangleDown;
};

Icon.TriangleUp = TriangleUp;
Icon.TriangleDown = TriangleDown;
