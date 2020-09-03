import { Component } from './component';
import { DefaultTarget } from './DefaultTarget';
import { Option } from './Option';

export const Select = Component as typeof Component & {
  DefaultTarget: typeof DefaultTarget;
  Option: typeof Option;
};

Select.DefaultTarget = DefaultTarget;
Select.Option = Option;
