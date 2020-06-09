import React, { useContext } from 'react';

import { Button } from '../Button';
import { Loading } from '../Loading';

import { Context } from './context';
import { StyledMastercard, StyledVisa } from './styled';
import { useMoonPayUrl } from './useMoonPayUrl';

export type Props = Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  'as' | 'htmlTag' | 'href' | 'variant'
> & {
  variant?: React.ComponentPropsWithoutRef<typeof Button>['variant'];
  address?: string;
  signature?: string;
  redirectUrl?: string;
  currencyCode?: string;
};

export const Component = ({
  address,
  disabled,
  variant = 'secondary',
  children,
  signature,
  redirectUrl,
  currencyCode,
  ...otherProps
}: Props) => {
  const { mode, apiKey, signatureEndpoint } = useContext(Context);
  if (!apiKey) {
    throw new Error('MoonPay API key has not been provided');
  }

  const { url, isLoading } = useMoonPayUrl({
    address,
    currencyCode,
    signatureEndpoint,
    apiKey,
    mode,
    redirectUrl,
  });

  return (
    <Button
      {...otherProps}
      variant={variant}
      href={url}
      disabled={isLoading || !apiKey || disabled}
    >
      {isLoading ? (
        <Loading />
      ) : (
        children ?? (
          <>
            Buy BNB&nbsp;
            <StyledVisa />
            <StyledMastercard />
          </>
        )
      )}
    </Button>
  );
};

Component.displayName = 'BuyWithMoonPay';
