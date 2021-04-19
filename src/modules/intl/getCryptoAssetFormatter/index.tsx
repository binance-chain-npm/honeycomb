import { NON_BREAKING_SPACE } from '../constants';

export const getCryptoAssetFormatter = ({
  locale,
  displaySymbol,
}: {
  locale: string;
  displaySymbol: string;
}) => {
  const formatter = Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
  });

  const format: typeof formatter.format = (number: number) =>
    `${formatter.format(number)}${displaySymbol ? NON_BREAKING_SPACE : ''}${displaySymbol}`;

  const formatToParts: typeof formatter.formatToParts = (number) => [
    ...formatter.formatToParts(number),
    { type: 'literal', value: NON_BREAKING_SPACE },
    { type: 'currency', value: displaySymbol },
  ];

  return { format, formatToParts };
};
