import React, { useContext, useMemo } from 'react';
import { stringifyUrl } from 'query-string';
import { useTheme } from 'styled-components';

import { Button } from '../Button';

import { Context } from './context';
import { StyledMastercard, StyledVisa } from './styled';

export type Props = Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  'as' | 'htmlTag' | 'href' | 'variant'
> & {
  variant?: React.ComponentPropsWithoutRef<typeof Button>['variant'];
  address?: string;
  signature?: string;
  redirectUrl?: string;
};

export const Component = ({
  address,
  disabled,
  variant = 'secondary',
  children,
  signature,
  redirectUrl: redirectUrlParam,
  ...otherProps
}: Props) => {
  const theme = useTheme();
  const { mode, apiKey } = useContext(Context);
  if (process.env.NODE_ENV !== 'production' && !apiKey) {
    throw new Error('MoonPay API key has not been provided');
  }

  const redirectUrl = useMemo(() => {
    if (redirectUrlParam) return redirectUrlParam;
    if (typeof location !== 'undefined') return location.href; // eslint-disable-line no-restricted-globals
    return undefined;
  }, [redirectUrlParam]);

  const url = useMemo(
    () =>
      stringifyUrl({
        url: mode === 'production' ? 'https://buy.moonpay.io' : 'https://buy-staging.moonpay.io',
        query: {
          apiKey,
          currencyCode: 'bnb',
          colorCode: theme.honeycomb.color.primary.normal,
          walletAddress: address,
          signature,
          redirectURL: redirectUrl,
        },
      }),
    [apiKey, address, mode, theme, signature, redirectUrl],
  );

  return (
    <Button {...otherProps} variant={variant} href={url} disabled={!apiKey || disabled}>
      {children ?? (
        <>
          Buy BNB&nbsp;
          <StyledVisa />
          <StyledMastercard />
        </>
      )}
    </Button>
  );
};

Component.displayName = 'BuyWithMoonPay';
