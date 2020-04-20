import { DefaultTheme } from 'styled-components';
import { getValueAndUnit as getValueAndUnitOriginal } from 'polished';

import { HoneycombTheme } from '../themes/HoneycombTheme';

export type Sizes = keyof Pick<
  HoneycombTheme['honeycomb']['size'],
  'huge' | 'increased' | 'large' | 'normal' | 'reduced' | 'small'
>;

type FontParam = { forFontSize: Sizes };
const defaultFont: FontParam = { forFontSize: 'normal' };

const getValueAndUnit = (value: string) => {
  const [sizeValue, sizeUnit]: [string | number, string] = getValueAndUnitOriginal(value);
  if (sizeUnit !== 'em' && sizeUnit !== 'px') {
    throw new Error(`Invalid unit "${sizeUnit}"`);
  }

  const adjustedValue = typeof sizeValue === 'string' ? parseFloat(sizeValue) : sizeValue;

  return [adjustedValue, sizeUnit] as const;
};

export const rebaseEm = ({ size, toBase }: { size: string; toBase: string }) => {
  const [sizeValue, sizeUnit] = getValueAndUnit(size);
  const [baseValue, baseUnit] = getValueAndUnit(toBase);

  const adjustedValue = sizeUnit === 'px' ? sizeValue / 16 : sizeValue;
  const adjustedBase = baseUnit === 'px' ? baseValue / 16 : baseValue;

  return `${adjustedValue / adjustedBase}em`;
};

export const modularScale = (steps: number) => ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) =>
  rebaseEm({
    size: theme.honeycomb.size.modularScale(steps),
    toBase: theme.honeycomb.size[forFontSize],
  });

export const halfOf = (value: ReturnType<typeof huge>) => ({ theme }: { theme: DefaultTheme }) => {
  const [size, unit] = getValueAndUnit(value({ theme }));
  return `${size / 2}${unit}`;
};

export const huge = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.huge, toBase: theme.honeycomb.size[forFontSize] });

export const increased = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.increased, toBase: theme.honeycomb.size[forFontSize] });

export const base = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.normal, toBase: theme.honeycomb.size[forFontSize] });

export const large = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.large, toBase: theme.honeycomb.size[forFontSize] });

export const reduced = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.reduced, toBase: theme.honeycomb.size[forFontSize] });

export const small = ({ forFontSize }: FontParam = defaultFont) => ({
  theme,
}: {
  theme: DefaultTheme;
}) => rebaseEm({ size: theme.honeycomb.size.small, toBase: theme.honeycomb.size[forFontSize] });
