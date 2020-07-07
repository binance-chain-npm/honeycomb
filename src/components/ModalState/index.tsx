import { Component } from './component';
import { Icon } from './Icon';
import { Title } from './Title';
import { Description } from './Description';

export const ModalState = Component as typeof Component & {
  Icon: typeof Icon;
  Title: typeof Title;
  Description: typeof Description;
};
ModalState.Icon = Icon;
ModalState.Title = Title;
ModalState.Description = Description;
