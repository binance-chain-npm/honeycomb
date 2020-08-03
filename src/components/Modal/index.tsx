import { Component } from './component';
import { Box } from './styled';
import { Header } from './Header';
import { Content } from './Content';

export const Modal = Component as typeof Component & {
  Box: typeof Box;
  Header: typeof Header;
  Content: typeof Content;
};

Modal.Box = Box;
Modal.Header = Header;
Modal.Content = Content;
