import { stringifyUrl } from 'query-string';

export type Params = {
  colorCode?: string;
  address?: string;
  currencyCode?: string;
  redirectUrl?: string;
  mode: 'test' | 'production';
  apiKey: string;
};

export const buildDefaultMoonPayUrl = ({
  redirectUrl: redirectUrlParam,
  mode,
  apiKey,
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
        currencyCode,
        colorCode,
        walletAddress: address,
        redirectURL: redirectUrl,
      },
    }))();

  return defaultUrl;
};
