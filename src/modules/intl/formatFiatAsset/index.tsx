import { getFiatAssetFormatter } from '../getFiatAssetFormatter';

export const formatFiatAsset = ({
  locale,
  amount,
  currency,
}: {
  locale: string;
  amount: number;
  currency: string;
}) => {
  return getFiatAssetFormatter({ locale, currency }).format(amount);
};
