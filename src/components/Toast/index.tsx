import { Component } from './component';
import { Icon } from './Icon';
export { createToast, dismissToast } from '../Toast/actions';

export const Toast = Component as typeof Component & { Icon: typeof Icon };

Toast.Icon = Icon;
