import { Component } from './component';
import { Item } from './Item';

export const Breadcrumb = Component as typeof Component & {
  Item: typeof Item;
};

Breadcrumb.Item = Item;
