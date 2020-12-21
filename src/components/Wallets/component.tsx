import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { SIZES, useWindowSize } from '../internal/useWindowSize';
import { Space } from '../Space';

import { Break, StyledPanelControl, StyledPanelControlItem } from './styled';
import { DefaultWalletProvider, WalletProvider, useWalletProviders } from './useWalletProviders';

export type Props = Testable & {
  className?: string;
  providers: (DefaultWalletProvider | WalletProvider)[];
  selected?: WalletProvider;
  onChange: ({ provider }: { provider?: WalletProvider }) => void;
};

export const Component = ({
  providers,
  selected,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { providers: defaultProviders } = useWalletProviders();
  const { width } = useWindowSize();

  const isSm = useMemo(() => width < SIZES.md, [width]);

  return (
    <StyledPanelControl
      {...otherProps}
      orientation={isSm ? 'vertical' : 'horizontal'}
      variant="solid"
      data-testid={buildTestId()}
    >
      {providers.map((it, index) => {
        const element = typeof it === 'string' ? defaultProviders[it] : it;

        return (
          <>
            <StyledPanelControlItem
              key={index}
              selected={selected?.name === element.name}
              onClick={(e) => {
                e.preventDefault();
                onChange({ provider: element });
              }}
            >
              {element.icon}
              <Space size="small" base="reduced" />
              {element.name}
            </StyledPanelControlItem>
            {(index + 1) % 3 !== 0 && !isSm && <Space size="normal" />}
            {(index + 1) % 3 === 0 && !isSm && <Break />}
          </>
        );
      })}
    </StyledPanelControl>
  );
};

Component.displayName = 'Wallets';

Component.Item = StyledPanelControlItem;
