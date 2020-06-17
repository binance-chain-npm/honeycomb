import { Component } from './component';
import { Item } from './Item';

export const ModalPickOne = Component as typeof Component & { Item: typeof Item };

ModalPickOne.Item = Item;
