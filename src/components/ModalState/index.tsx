import { Component } from './component';
import { Icon } from './Icon';
import { Title } from './Title';
import { Content } from './Content';

export const ModalState = Component as typeof Component & {
  Icon: typeof Icon;
  Title: typeof Title;
  Content: typeof Content;
};
ModalState.Icon = Icon;
ModalState.Title = Title;
ModalState.Content = Content;
