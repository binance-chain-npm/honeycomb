import { css } from 'styled-components';

import light from './BinancePlex-Light.otf';
import regular from './BinancePlex-Regular.otf';
import medium from './BinancePlex-Medium.otf';
import semiBold from './BinancePlex-SemiBold.otf';

export const fontName = 'BinancePlex';

export const fontFaces = css`
  @font-face {
    font-family: "${fontName}";
    src: url(${light}) format('opentype');
    font-weight: 100;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${light}) format('opentype');
    font-weight: 200;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${regular}) format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${regular}) format('opentype');
    font-weight: 400;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${medium}) format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${medium}) format('opentype');
    font-weight: 600;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${semiBold}) format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${semiBold}) format('opentype');
    font-weight: 800;
  }

  @font-face {
    font-family: "${fontName}";
    src: url(${semiBold}) format('opentype');
    font-weight: 900;
  }
`;
