import { Component } from './component';
import { Content } from './Content';
import { Box } from './styled';

export const Modal = Component as typeof Component & { Content: typeof Content; Box: typeof Box };

Modal.Content = Content;
Modal.Box = Box;
