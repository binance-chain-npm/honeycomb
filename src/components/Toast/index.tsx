import { Component } from './component';
import { Icon } from './Icon';
export { createToast } from '../Toast/actions';

export const Toast = Component as typeof Component & { Icon: typeof Icon };

Toast.Icon = Icon;
