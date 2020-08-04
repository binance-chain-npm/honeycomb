import { Component } from './component';
import { Option } from './Option';

export const Select = Component as typeof Component & {
  Option: typeof Option;
};

Select.Option = Option;
