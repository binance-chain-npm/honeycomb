import { Component } from './component';
import { Dropdown } from './Dropdown';
import { Item } from './Item';

export const Header = Component as typeof Component & {
  Dropdown: typeof Dropdown;
  Item: typeof Item;
};

Header.Dropdown = Dropdown;
Header.Item = Item;
