import { Component } from './component';
import { Item } from './Item';

export const PanelControl = Component as typeof Component & {
  Item: typeof Item;
};

PanelControl.Item = Item;
