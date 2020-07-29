import { Component } from './component';
import { Item } from '../internal/PickOne/Item';

export const ModalPickOne = Component as typeof Component & { Item: typeof Item };

ModalPickOne.Item = Item;
