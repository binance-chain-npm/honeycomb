import { useMemo, useState, useEffect, useContext } from 'react';
import { useTheme } from 'styled-components';

import { buildMoonPayUrl } from '../buildMoonPayUrl';
import { buildDefaultMoonPayUrl } from '../buildDefaultMoonPayUrl';
import { Context } from '../context';

export type Params = {
  address?: string;
  defaultCurrencyCode?: string;
  currencyCode?: string;
  redirectUrl?: string;
};

export const useMoonPayUrl = ({
  address,
  currencyCode,
  redirectUrl,
  defaultCurrencyCode,
}: Params) => {
  const { mode, apiKey, signatureEndpoint } = useContext(Context);
  if (!apiKey) {
    throw new Error('MoonPay API key has not been provided');
  }

  const theme = useTheme();
  const colorCode = theme.honeycomb.color.primary.normal;

  const defaultUrl = buildDefaultMoonPayUrl({
    mode,
    apiKey,
    colorCode,
    address,
    currencyCode,
    redirectUrl,
    defaultCurrencyCode,
  });

  const [url, setUrl] = useState(defaultUrl);
  const [isLoading, setIsLoading] = useState(!!signatureEndpoint);

  useEffect(() => {
    if (!signatureEndpoint) return;

    (async () => {
      try {
        setIsLoading(true);

        const result = await buildMoonPayUrl({
          mode,
          apiKey,
          colorCode,
          signatureEndpoint,
          address,
          currencyCode,
          redirectUrl,
          defaultCurrencyCode,
        });

        setUrl(result);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [
    address,
    currencyCode,
    redirectUrl,
    defaultCurrencyCode,
    apiKey,
    mode,
    signatureEndpoint,
    colorCode,
  ]);

  return useMemo(() => ({ url, isLoading }), [url, isLoading]);
};
