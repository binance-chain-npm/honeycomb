import { NON_BREAKING_SPACE } from '../constants';

export const formatCryptoAsset = ({
  locale,
  amount,
  displaySymbol,
}: {
  locale: string;
  amount: number;
  displaySymbol: string;
}) => {
  return `${Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
  }).format(amount)}${NON_BREAKING_SPACE}${displaySymbol}`;
};

export const formatFiatAsset = ({
  locale,
  amount,
  currency,
}: {
  locale: string;
  amount: number;
  currency: string;
}) => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
  }).format(amount);
};
