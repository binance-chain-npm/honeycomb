import { Component } from './component';
import { Icon } from './Icon';

export const ModalState = Component as typeof Component & { Icon: typeof Icon };
ModalState.Icon = Icon;
