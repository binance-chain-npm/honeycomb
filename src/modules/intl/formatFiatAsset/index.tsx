export const formatFiatAsset = ({
  locale,
  amount,
  currency,
}: {
  locale: string;
  amount: number;
  currency: string;
}) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
};
