import { css } from 'styled-components';

import { getFontWeight, getFontStyle, FontVariantMap } from '../utils';

import bold from './DINNextLTPro-Black.otf';
import boldItalic from './DINNextLTPro-BlackItalic.otf';
import semiBold from './DINNextLTPro-Bold.otf';
import semiBoldItalic from './DINNextLTPro-BoldItalic.otf';
import extraLight from './DINNextLTPro-UltraLight.otf';
import extraLightItalic from './DINNextLTPro-UltraLightIt.otf';
import italic from './DINNextLTPro-Italic.otf';
import light from './DINNextLTPro-Light.otf';
import lightItalic from './DINNextLTPro-LightItalic.otf';
import medium from './DINNextLTPro-Medium.otf';
import mediumItalic from './DINNextLTPro-MediumItalic.otf';
import regular from './DINNextLTPro-Regular.otf';

export const fontName = 'DINNext';

const fontVariants: FontVariantMap = {
  bold,
  boldItalic,
  extraLight,
  extraLightItalic,
  italic,
  light,
  lightItalic,
  medium,
  mediumItalic,
  regular,
  semiBold,
  semiBoldItalic,
  thin: extraLight,
  thinItalic: extraLightItalic,
};

export const fontFaces = () =>
  Object.keys(fontVariants).map(
    (variantName) =>
      css`@font-face {
        font-family: "${fontName}";
        src: url(${fontVariants[variantName as keyof FontVariantMap]}) format('opentype');
        font-weight: ${getFontWeight(variantName)};
        font-style: ${getFontStyle(variantName)};
        unicode-range: U+0030-0039;
      }`,
  );
