import { Component } from './component';
import { Item } from './Item';

export const Swiper = Component as typeof Component & {
  Item: typeof Item;
};

Swiper.Item = Item;
