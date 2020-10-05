import { Component } from './component';
import { Content, ContentContainer } from './styled';

export const Tooltip = Component as typeof Component & {
  ContentContainer: typeof ContentContainer;
  Content: typeof Content;
};

Tooltip.ContentContainer = ContentContainer;
Tooltip.Content = Content;
