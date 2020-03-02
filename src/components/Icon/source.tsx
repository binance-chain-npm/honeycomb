import Tick from './assets/Tick.svg';
import CaretDown from './assets/CaretDown.svg';
import Eye from './assets/Eye.svg';
import EyeBlocked from './assets/EyeBlocked.svg';

export enum Src {
  CaretDown = 'CaretDown',
  Tick = 'Tick',
  Eye = 'Eye',
  EyeBlocked = 'EyeBlocked',
}

export const sourceFor = (src: Src) =>
  ({
    [Src.Tick]: Tick,
    [Src.CaretDown]: CaretDown,
    [Src.Eye]: Eye,
    [Src.EyeBlocked]: EyeBlocked,
  }[src]);
