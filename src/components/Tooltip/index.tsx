import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';

export const Tooltip = Component as typeof Component & {
  DefaultTarget: typeof DefaultTarget;
};

Tooltip.DefaultTarget = DefaultTarget;
