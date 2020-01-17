import { css } from 'styled-components';

import { getFontWeight, getFontStyle, FontVariantMap, requireIfNeeded } from '../utils';

import bold from './IBMPlexSans-Bold.otf';
import boldItalic from './IBMPlexSans-BoldItalic.otf';
import extraLight from './IBMPlexSans-ExtraLight.otf';
import extraLightItalic from './IBMPlexSans-ExtraLightItalic.otf';
import italic from './IBMPlexSans-Italic.otf';
import light from './IBMPlexSans-Light.otf';
import lightItalic from './IBMPlexSans-LightItalic.otf';
import medium from './IBMPlexSans-Medium.otf';
import mediumItalic from './IBMPlexSans-MediumItalic.otf';
import regular from './IBMPlexSans-Regular.otf';
import semiBold from './IBMPlexSans-SemiBold.otf';
import semiBoldItalic from './IBMPlexSans-SemiBoldItalic.otf';
import thin from './IBMPlexSans-Thin.otf';
import thinItalic from './IBMPlexSans-ThinItalic.otf';

export const fontName = 'IBMPlexSans';

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
  thin,
  thinItalic,
};

export const fontFaces = () =>
  Object.keys(fontVariants).map(
    (variantName) =>
      css`@font-face {
        font-family: "${fontName}";
        src: url(${requireIfNeeded(
          fontVariants[variantName as keyof FontVariantMap],
        )}) format('opentype');
        font-weight: ${getFontWeight(variantName)};
        font-style: ${getFontStyle(variantName)};
      }`,
  );
