import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Item } from './Item';
import { Divider } from './Divider';

export const Dropdown = Component as typeof Component & {
  DefaultTarget: typeof DefaultTarget;
  Item: typeof Item;
  Divider: typeof Divider;
};

Dropdown.DefaultTarget = DefaultTarget;
Dropdown.Item = Item;
Dropdown.Divider = Divider;
