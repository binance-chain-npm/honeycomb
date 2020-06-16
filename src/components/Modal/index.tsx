import { Component } from './component';
import { Body } from './Body';

export const Modal = Component as typeof Component & { Body: typeof Body };

Modal.Body = Body;
