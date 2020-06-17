import { Component } from './component';
import { Body } from './Body';
import { Scroll } from './Scroll';

export const Modal = Component as typeof Component & { Body: typeof Body; Scroll: typeof Scroll };

Modal.Body = Body;
Modal.Scroll = Scroll;
