import { formatCryptoAsset } from '..';
import { NON_BREAKING_SPACE } from '../../constants';

describe('formatCryptoAsset()', () => {
  it('aaa', () => {
    expect(formatCryptoAsset({ amount: 1234.56, locale: 'en-US', displaySymbol: 'BNB' })).toBe(
      `1,234.56${NON_BREAKING_SPACE}BNB`,
    );
  });

  it('aaa', () => {
    expect(formatCryptoAsset({ amount: 1234.56, locale: 'es-ES', displaySymbol: 'BNB' })).toBe(
      `1234,56${NON_BREAKING_SPACE}BNB`,
    );
  });
});
