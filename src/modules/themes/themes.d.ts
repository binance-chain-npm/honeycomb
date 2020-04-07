import 'styled-components';
import { HoneycombTheme } from './themes/HoneycombTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends HoneycombTheme {}
}
