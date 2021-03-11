export { createToast } from '../Toast/actions';
import { Component } from './component';
import { Icon } from './Icon';

export const Toast = Component as typeof Component & { Icon: typeof Icon };

Toast.Icon = Icon;
