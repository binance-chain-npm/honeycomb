import { Component } from './component';
import { Content } from './styled';

export const Modal = Component as typeof Component & { Content: typeof Content };

Modal.Content = Content;
