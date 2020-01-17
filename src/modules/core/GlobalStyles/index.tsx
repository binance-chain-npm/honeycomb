import React from 'react';

import { GlobalFontFaces } from '../GlobalFontFaces';
import { GlobalFonts } from '../GlobalFonts';
import { GlobalSizing } from '../GlobalSizing';
import { GlobalColors } from '../GlobalColors';

export const GlobalStyles = () => (
  <>
    <GlobalFontFaces />
    <GlobalFonts />
    <GlobalSizing />
    <GlobalColors />
  </>
);
