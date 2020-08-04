import { getCryptoAssetFormatter } from '../getCryptoAssetFormatter';

export const formatCryptoAsset = ({
  locale,
  amount,
  displaySymbol,
}: {
  locale: string;
  amount: number;
  displaySymbol: string;
}) => {
  return getCryptoAssetFormatter({ locale, displaySymbol }).format(amount);
};
