import { Component } from './component';
import { Success, Warning, Danger } from './styled';

export const Icon = Component as typeof Component & {
  Success: typeof Success;
  Warning: typeof Warning;
  Danger: typeof Danger;
};

Icon.Success = Success;
Icon.Warning = Warning;
Icon.Danger = Danger;
