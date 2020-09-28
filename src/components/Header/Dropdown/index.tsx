import { DefaultTarget } from '../../Dropdown/DefaultTarget';
import { Divider } from '../../Dropdown/Divider';
import { Item } from '../../Dropdown/Item';

import { Component } from './component';

export const Dropdown = Component as typeof Component & {
  DefaultTarget: typeof DefaultTarget;
  Item: typeof Item;
  Divider: typeof Divider;
};

Dropdown.DefaultTarget = DefaultTarget;
Dropdown.Item = Item;
Dropdown.Divider = Divider;
