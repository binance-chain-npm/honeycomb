import { Component } from './component';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export const Modal = Component as typeof Component & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
