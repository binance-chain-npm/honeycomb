import { Component } from './component';
import { ContentWrapper } from './styled';

export const DefaultTarget = Component as typeof Component & { Wrapper: typeof ContentWrapper };

DefaultTarget.Wrapper = ContentWrapper;
