import { stringifyUrl } from 'query-string';

export type Params = {
  colorCode?: string;
  address?: string;
  defaultCurrencyCode?: string;
  currencyCode?: string;
  redirectUrl?: string;
  mode: 'test' | 'production';
  apiKey: string;
};

export const buildDefaultMoonPayUrl = ({
  redirectUrl: redirectUrlParam,
  mode,
  apiKey,
  defaultCurrencyCode = 'bnb',
  currencyCode,
  colorCode,
  address,
}: Params) => {
  const redirectUrl = (() => {
    if (redirectUrlParam) return redirectUrlParam;
    if (typeof location !== 'undefined') return location.href; // eslint-disable-line no-restricted-globals
    return undefined;
  })();

  const defaultUrl = (() =>
    stringifyUrl({
      url: mode === 'production' ? 'https://buy.moonpay.io' : 'https://buy-staging.moonpay.io',
      query: {
        apiKey,
        defaultCurrencyCode,
        currencyCode,
        colorCode,
        walletAddress: address,
        redirectURL: redirectUrl,
      },
    }))();

  return defaultUrl;
};
