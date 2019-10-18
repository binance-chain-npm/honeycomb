import { Styled } from './styled';
import { Component } from './component';

export const Styleless = (Styled as unknown) as typeof Component;
