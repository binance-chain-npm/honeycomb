import { Look } from './styled';
import { Component } from './component';

export const Button = Component as typeof Component & {
  Look: typeof Look;
};

Button.Look = Look;
