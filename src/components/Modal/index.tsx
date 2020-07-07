import { Component } from './component';
import { Content, Box } from './styled';

export const Modal = Component as typeof Component & { Content: typeof Content; Box: typeof Box };

Modal.Content = Content;
Modal.Box = Box;
