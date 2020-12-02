import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Content, Target } from './styled';

export const Tooltip = Component as typeof Component & {
  Content: typeof Content;
  Target: typeof Target;
  DefaultTarget: typeof DefaultTarget;
};

Tooltip.Content = Content;
Tooltip.Target = Target;
Tooltip.DefaultTarget = DefaultTarget;
