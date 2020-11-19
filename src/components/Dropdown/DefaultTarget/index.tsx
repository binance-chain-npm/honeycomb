import { Component } from './component';
import { Icon } from './Icon';

export const DefaultTarget = Component as typeof Component & {
  Icon: typeof Icon;
};

DefaultTarget.Icon = Icon;
