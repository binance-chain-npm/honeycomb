import { Component } from './component';
import { Content } from './styled';

export const Tooltip = Component as typeof Component & { Content: typeof Content };

Tooltip.Content = Content;
