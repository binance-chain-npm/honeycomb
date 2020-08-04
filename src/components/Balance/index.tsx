import { Component } from './component';
import { BigText, SmallText } from './styled';

export const Balance = Component as typeof Component & {
  BigText: typeof BigText;
  SmallText: typeof SmallText;
};

Balance.BigText = BigText;
Balance.SmallText = SmallText;
