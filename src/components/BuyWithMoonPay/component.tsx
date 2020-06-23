import React, { useContext } from 'react';

import { Button } from '../Button';
import { Loading } from '../Loading';
import { useMoonPayUrl, MoonPayContext } from '../../modules/moonpay';

import { StyledMastercard, StyledVisa } from './styled';

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
  const { apiKey } = useContext(MoonPayContext);
  const { url, isLoading } = useMoonPayUrl({
    address,
    currencyCode,
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
