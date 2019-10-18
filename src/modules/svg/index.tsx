import { Base64 } from 'js-base64';

const PREFIX = 'data:image/svg+xml;base64,';

export const svgAsBase64 = (svg: string): string => {
  if (svg.startsWith(PREFIX)) return svg;
  return `${PREFIX}${Base64.encode(svg)}`;
};

export const svgRawFromBase64 = (svg: string): string => {
  if (!svg.startsWith(PREFIX)) return svg;
  return Base64.decode(svg.replace(PREFIX, ''));
};
