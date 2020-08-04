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
