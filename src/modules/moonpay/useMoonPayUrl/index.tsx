import { useMemo, useState, useEffect, useContext } from 'react';
import { useTheme } from 'styled-components';

import { buildMoonPayUrl } from '../buildMoonPayUrl';
import { buildDefaultMoonPayUrl } from '../buildDefaultMoonPayUrl';
import { Context } from '../context';

export type Params = {
  address?: string;
  currencyCode?: string;
  redirectUrl?: string;
};

export const useMoonPayUrl = ({ address, currencyCode = 'bnb', redirectUrl }: Params) => {
  const { mode, apiKey, signatureEndpoint } = useContext(Context);
  if (!apiKey) {
    throw new Error('MoonPay API key has not been provided');
  }

  const theme = useTheme();
  const colorCode = theme.honeycomb.color.primary.normal;

  const defaultUrl = buildDefaultMoonPayUrl({
    redirectUrl,
    mode,
    apiKey,
    currencyCode,
    colorCode,
    address,
  });

  const [url, setUrl] = useState(defaultUrl);
  const [isLoading, setIsLoading] = useState(!!signatureEndpoint);

  useEffect(() => {
    if (!signatureEndpoint) return;

    (async () => {
      try {
        setIsLoading(true);

        const result = await buildMoonPayUrl({
          redirectUrl,
          mode,
          apiKey,
          currencyCode,
          colorCode,
          address,
          signatureEndpoint,
        });

        setUrl(result);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [address, apiKey, currencyCode, mode, redirectUrl, signatureEndpoint, colorCode]);

  return useMemo(() => ({ url, isLoading }), [url, isLoading]);
};
