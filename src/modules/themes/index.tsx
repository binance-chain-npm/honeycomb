import { GoldDark } from './themes/GoldDark';
import { GoldLight } from './themes/GoldLight';
import { GoldAccent } from './themes/GoldAccent';
import { SeaDark } from './themes/SeaDark';
import { SeaLight } from './themes/SeaLight';

const HoneycombTheme = { GoldDark, GoldLight, GoldAccent, SeaDark, SeaLight } as const;

export { HoneycombThemeProvider } from './HoneycombThemeProvider';
export { useSystemTheme } from './useSystemTheme';
export { HoneycombThemeType } from './themes/HoneycombThemeType';
export { HoneycombTheme };
