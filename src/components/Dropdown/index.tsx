import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Item } from './Item';

export const Dropdown = Component as typeof Component & {
  DefaultTarget: typeof DefaultTarget;
  Item: typeof Item;
};

Dropdown.DefaultTarget = DefaultTarget;
Dropdown.Item = Item;
