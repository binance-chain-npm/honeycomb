import 'styled-components';
import { HoneycombTheme } from './HoneycombTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends HoneycombTheme {}
}
