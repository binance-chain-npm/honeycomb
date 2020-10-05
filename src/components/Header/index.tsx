import { HeaderItem as HeaderItemType, Component } from './component';
import { Logo } from './Logo';

export const Header = Component as typeof Component & { Logo: typeof Logo };

Header.Logo = Logo;

export type HeaderItem = HeaderItemType;
