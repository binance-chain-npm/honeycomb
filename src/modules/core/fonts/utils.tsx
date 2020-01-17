export const getFontStyle = (variantName: string) =>
  variantName.toLowerCase().endsWith('italic') ? 'italic' : 'normal';

export const getFontWeight = (variantName: string) => {
  if (variantName.startsWith('bold')) return 700;
  if (variantName.startsWith('extraLight')) return 200;
  if (variantName.startsWith('light')) return 300;
  if (variantName.startsWith('medium')) return 500;
  if (variantName.startsWith('semiBold')) return 600;
  if (variantName.startsWith('thin')) return 100;

  return 400;
};

export const requireIfNeeded = (importValue: unknown) =>
  needsRequire(importValue) ? require(importValue.replace('~~', './')) : importValue;

const needsRequire = (importValue: unknown): importValue is string =>
  typeof importValue === 'string' && importValue.startsWith('~~');

export interface FontVariantMap {
  bold: string;
  boldItalic: string;
  extraLight: string;
  extraLightItalic: string;
  italic: string;
  light: string;
  lightItalic: string;
  medium: string;
  mediumItalic: string;
  regular: string;
  semiBold: string;
  semiBoldItalic: string;
  thin: string;
  thinItalic: string;
}
