import { Item } from '../internal/Select/Item';

import { Component } from './component';

export const ModalSelect = Component as typeof Component & { Item: typeof Item };

ModalSelect.Item = Item;
