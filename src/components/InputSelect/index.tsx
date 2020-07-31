import { Item } from '../internal/Select/Item';

import { Component } from './component';

export const InputSelect = Component as typeof Component & { Item: typeof Item };

InputSelect.Item = Item;
