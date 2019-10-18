import { Component } from './component';
import { LabelContent } from './LabelContent';

export const Checkbox = Component as typeof Component & { Label: typeof LabelContent };
