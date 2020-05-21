import 'styled-components';
import { HoneycombThemeType } from './themes/HoneycombThemeType';

declare module 'styled-components' {
  export interface DefaultTheme extends HoneycombThemeType {}
}
