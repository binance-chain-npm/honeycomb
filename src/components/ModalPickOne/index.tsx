import { Item } from '../internal/PickOne/Item';

import { Component } from './component';

export const ModalPickOne = Component as typeof Component & { Item: typeof Item };

ModalPickOne.Item = Item;
