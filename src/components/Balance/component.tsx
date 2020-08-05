import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { getCryptoAssetFormatter, getFiatAssetFormatter } from '../../modules/intl';

import { Container, BigText, SmallText } from './styled';

export type Variant = 'crypto' | 'fiat';

export type Props = Testable & {
  className?: string;
  variant: Variant;
  value: number;
  locale: string;
  currency: string;
};

export const Component = ({
  className,
  variant,
  value,
  locale,
  currency,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const parts = useMemo(() => {
    if (variant === 'crypto') {
      return getCryptoAssetFormatter({ locale, displaySymbol: currency }).formatToParts(value);
    }

    return getFiatAssetFormatter({ locale, currency }).formatToParts(value);
  }, [variant, value, locale, currency]);

  return (
    <Container className={className} data-testid={buildTestId()}>
      {parts.map(({ type, value }, index) => {
        if (type === 'integer' || type === 'group') {
          return (
            <BigText key={index} data-testid={buildTestId(`${index}-${type}`)}>
              {value}
            </BigText>
          );
        }

        return (
          <SmallText key={index} data-testid={buildTestId(`${index}-${type}`)}>
            {value}
          </SmallText>
        );
      })}
    </Container>
  );
};

Component.displayName = 'Balance';
