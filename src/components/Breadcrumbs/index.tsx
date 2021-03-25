import { Component } from './component';
import { Item } from './Item';

export const Breadcrumbs = Component as typeof Component & {
  Item: typeof Item;
};

Breadcrumbs.Item = Item;
