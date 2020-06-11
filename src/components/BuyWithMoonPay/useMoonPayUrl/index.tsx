import { useMemo, useState, useEffect } from 'react';
import { stringifyUrl } from 'query-string';
import { useTheme } from 'styled-components';

export type Params = {
  address?: string;
  currencyCode?: string;
  defaultCurrencyCode?: string;
  redirectUrl?: string;
  mode: 'test' | 'production';
  apiKey: string;
  signatureEndpoint?: string;
};

export const useMoonPayUrl = ({
  address,
  currencyCode,
  defaultCurrencyCode = 'bnb',
  redirectUrl: redirectUrlParam,
  mode,
  apiKey,
  signatureEndpoint,
}: Params) => {
  const theme = useTheme();

  const redirectUrl = useMemo(() => {
    if (redirectUrlParam) return redirectUrlParam;
    if (typeof location !== 'undefined') return location.href; // eslint-disable-line no-restricted-globals
    return undefined;
  }, [redirectUrlParam]);

  const defaultUrl = useMemo(
    () =>
      stringifyUrl({
        url: mode === 'production' ? 'https://buy.moonpay.io' : 'https://buy-staging.moonpay.io',
        query: {
          apiKey,
          currencyCode,
          defaultCurrencyCode,
          colorCode: theme.honeycomb.color.primary.normal,
          walletAddress: address,
          redirectURL: redirectUrl,
        },
      }),
    [apiKey, currencyCode, defaultCurrencyCode, address, mode, theme, redirectUrl],
  );

  const [isLoading, setIsLoading] = useState(!!signatureEndpoint);
  const [url, setUrl] = useState(defaultUrl);

  useEffect(() => {
    if (!signatureEndpoint) return;

    (async () => {
      try {
        setIsLoading(true);

        const result = await fetch(signatureEndpoint, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: defaultUrl }),
        });
        if (!result.ok) {
          throw new Error('Could not call endpoint to sign URL');
        }

        const { signedUrl } = await result.json();
        setUrl(signedUrl);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [signatureEndpoint, defaultUrl]);

  return useMemo(() => ({ url, isLoading }), [url, isLoading]);
};
