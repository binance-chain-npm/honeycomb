import { formatFiatAsset } from '..';
import { NON_BREAKING_SPACE } from '../../constants';

describe('formatFiatAsset()', () => {
  it('aaa', () => {
    expect(formatFiatAsset({ amount: 1234.56, locale: 'en-US', currency: 'USD' })).toBe(
      '$1,234.56',
    );
  });

  it('aaa', () => {
    expect(formatFiatAsset({ amount: 1234.56, locale: 'es-ES', currency: 'EUR' })).toBe(
      `1234,56${NON_BREAKING_SPACE}€`,
    );
  });
});
