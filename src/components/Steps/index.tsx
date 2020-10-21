import { Component } from './component';
import { Connector } from './Connector';
import { Item } from './Item';

export const Steps = Component as typeof Component & {
  Connector: typeof Connector;
  Item: typeof Item;
};

Steps.Connector = Connector;
Steps.Item = Item;
