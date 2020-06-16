import { Component } from './component';
import { PickOne } from './PickOne';

export const Modal = Component as typeof Component & { PickOne: typeof PickOne };

Modal.PickOne = PickOne;
