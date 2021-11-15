import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Space } from '../Space';

import { StyledPanelControl, StyledPanelControlItem, Description } from './styled';
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
  columns,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { providers: defaultProviders } = useWalletProviders();

  const cols = useMemo(() => (columns && columns > 1 ? columns : 0), [columns]);

  return (
    <StyledPanelControl
      {...otherProps}
      orientation="horizontal"
      variant="solid"
      columns={cols}
      data-testid={buildTestId()}
    >
      {providers.map((it, index) => {
        const element: WalletProvider = typeof it === 'string' ? defaultProviders[it] : it;

        return (
          <>
            <StyledPanelControlItem
              key={index}
              selected={selected?.name === element.name}
              onClick={(e) => {
                e.preventDefault();
                onChange({ provider: element });
              }}
              columns={cols}
              data-testid={buildTestId(`${index}`)}
            >
              {element.icon}
              <Space size="tiny" />
              {element.name}
              {element.description && (
                <Description columns={cols}>{element.description}</Description>
              )}
            </StyledPanelControlItem>
          </>
        );
      })}
    </StyledPanelControl>
  );
};

Component.displayName = 'Wallets';

Component.Item = StyledPanelControlItem;
