/* eslint-disable import/namespace */
import { stripUnit } from 'polished';

import { GoldDark } from '../../themes/GoldDark';

import * as hcStyle from '..';

const MockedTheme = { theme: GoldDark };

const get = (value: ReturnType<typeof hcStyle['huge']>) =>
  parseFloat(stripUnit(value(MockedTheme)));

const functions = ['huge', 'increased', 'large', 'normal', 'reduced', 'small'] as const;

describe.each(functions)('%s()', (fnName) => {
  it.each(functions)('recalcutes value with ({ forFontSize: "%s" })', (forFontSizeName) => {
    expect(get(hcStyle[fnName]({ forFontSize: forFontSizeName }))).toBeCloseTo(
      get(hcStyle[fnName]()) / get(hcStyle[forFontSizeName]()),
    );
  });
});

describe('normal()', () => {
  it('defaults to "1em"', () => {
    expect(hcStyle.normal()(MockedTheme)).toBe('1em');
  });
});
