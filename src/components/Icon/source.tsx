import Tick from './assets/Tick.svg';
import CaretDown from './assets/CaretDown.svg';

export enum Src {
  CaretDown = 'CaretDown',
  Tick = 'Tick',
}

export const sourceFor = (src: Src) =>
  ({
    [Src.Tick]: Tick,
    [Src.CaretDown]: CaretDown,
  }[src]);
