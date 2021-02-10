import { HeaderItem as HeaderItemType, Component } from './component';
import { Account } from './Account';
import { Logo } from './Logo';

export const Header = Component as typeof Component & {
  Account: typeof Account;
  Logo: typeof Logo;
};

Header.Account = Account;
Header.Logo = Logo;

export type HeaderItem = HeaderItemType;
