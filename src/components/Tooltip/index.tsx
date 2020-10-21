import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Content, ContentContainer } from './styled';

export const Tooltip = Component as typeof Component & {
  ContentContainer: typeof ContentContainer;
  Content: typeof Content;
  DefaultTarget: typeof DefaultTarget;
};

Tooltip.ContentContainer = ContentContainer;
Tooltip.Content = Content;
Tooltip.DefaultTarget = DefaultTarget;
