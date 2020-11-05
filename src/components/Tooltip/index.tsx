import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Content } from './styled';

export const Tooltip = Component as typeof Component & {
  Content: typeof Content;
  DefaultTarget: typeof DefaultTarget;
};

Tooltip.Content = Content;
Tooltip.DefaultTarget = DefaultTarget;
