import React from 'react';

import { formatFiatAsset, formatCryptoAsset } from '../../src/modules/intl';
import { Sections } from '../modules/sections';

export default {
  title: `${Sections.Tests}/NumberFormat`,
};

export const fiat = () => {
  return (
    <>
      <div data-testid="en">
        {formatFiatAsset({ amount: 12345.67, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid="es">
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'EUR' })}
      </div>
      <div data-testid="es-usd">
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'USD' })}
      </div>
      <div data-testid="es-cny">
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'CNY' })}
      </div>
      <div data-testid="en-integer">
        {formatFiatAsset({ amount: 12345, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid="en-too-many-digist">
        {formatFiatAsset({ amount: 12345.6789, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid="en-zero">
        {formatFiatAsset({ amount: 0, locale: 'en-US', currency: 'USD' })}
      </div>
    </>
  );
};

export const crypto = () => {
  return (
    <>
      <div data-testid="en">
        {formatCryptoAsset({ amount: 12345.67, locale: 'en-US', displaySymbol: 'BNB' })}
      </div>
      <div data-testid="es">
        {formatCryptoAsset({ amount: 12345.67, locale: 'es-ES', displaySymbol: 'BNB' })}
      </div>
      <div data-testid="en-integer">
        {formatCryptoAsset({ amount: 12345, locale: 'en-US', displaySymbol: 'BNB' })}
      </div>
      <div data-testid="en-too-many-digist">
        {formatCryptoAsset({ amount: 12345.6789, locale: 'en-US', displaySymbol: 'BNB' })}
      </div>
      <div data-testid="en-zero">
        {formatCryptoAsset({ amount: 0, locale: 'en-US', displaySymbol: 'BNB' })}
      </div>
    </>
  );
};
