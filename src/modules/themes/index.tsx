import { GoldDark } from './themes/GoldDark';
import { GoldLight } from './themes/GoldLight';
import { SeaDark } from './themes/SeaDark';
import { SeaLight } from './themes/SeaLight';

const HoneycombTheme = { GoldDark, GoldLight, SeaDark, SeaLight } as const;

export { HoneycombThemeProvider } from './HoneycombThemeProvider';
export { useSystemTheme } from './useSystemTheme';
export { HoneycombThemeType } from './themes/HoneycombThemeType';
export { HoneycombTheme };
