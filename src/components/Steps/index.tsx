import { Component } from './component';
import { Item } from './Item';

export const Steps = Component as typeof Component & {
  Item: typeof Item;
};

Steps.Item = Item;
