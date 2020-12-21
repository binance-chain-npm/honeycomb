import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { SIZES, useWindowSize } from '../internal/useWindowSize';
import { Space } from '../Space';

import { StyledPanelControl, StyledPanelControlItem } from './styled';
import { DefaultWalletProvider, WalletProvider, useWalletProviders } from './useWalletProviders';

export type Props = Testable & {
  className?: string;
  providers: (DefaultWalletProvider | WalletProvider)[];
  selected?: WalletProvider;
  onChange: ({ provider }: { provider?: WalletProvider }) => void;
  columns?: number;
};

export const Component = ({
  providers,
  selected,
  onChange,
  columns = 3,
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
      columns={columns}
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
          </>
        );
      })}
    </StyledPanelControl>
  );
};

Component.displayName = 'Wallets';

Component.Item = StyledPanelControlItem;
