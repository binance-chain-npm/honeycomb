import { Item } from '../internal/PickOne/Item';

import { Component } from './component';

export const InputPickOne = Component as typeof Component & { Item: typeof Item };

InputPickOne.Item = Item;
