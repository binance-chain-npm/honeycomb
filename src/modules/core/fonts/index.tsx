import { fontFaces as plexFontFaces, fontName as plexFontName } from './plex';

export const fontNames = [plexFontName];

export const fontFaces = [plexFontFaces];

export const fontFamily = `${fontNames.join(
  ',',
)}, -apple-system, '.SFNSText-Regular', 'San Francisco',
BlinkMacSystemFont, '.PingFang-SC-Regular', 'Microsoft YaHei', 'Segoe UI', 'Helvetica Neue',
Helvetica, Arial, sans-serif`;
