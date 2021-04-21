import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { SIZES, useWindowSize } from '../internal/useWindowSize';
import { Modal } from '../Modal';

import { DEFAULT_WALLET_PROVIDERS } from './useWalletProviders';

import { Wallets } from './';

type WalletProvider = React.ComponentPropsWithoutRef<typeof Wallets>['selected'];

export default {
  component: Wallets,
  title: `${Sections.Elements}/Wallets`,
};

export const Rows: Story = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  return (
    <Wallets
      selected={selected}
      onChange={change}
      providers={Array.from(DEFAULT_WALLET_PROVIDERS)}
    />
  );
};
Rows.decorators = decorators;

export const Columns: Story = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  return (
    <Wallets
      selected={selected}
      onChange={change}
      providers={Array.from(DEFAULT_WALLET_PROVIDERS)}
      columns={3}
    />
  );
};
Columns.decorators = decorators;

export const WithCustomWalletProvider: Story = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  const wallets = new Array(5).fill(null).map((_, index) => ({
    name: `Custom Wallet ${index + 1}`,
    icon: <Icon.Wallet />,
    href: '#',
  }));

  return (
    <Wallets
      selected={selected}
      onChange={change}
      providers={['Binance Chain Wallet', ...wallets]}
      columns={4}
    />
  );
};
WithCustomWalletProvider.decorators = decorators;

export const ResponsiveWithDescription: Story = () => {
  const { isSm } = useWindowSize();
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  const cols = useMemo(() => (isSm ? 0 : 4), [isSm]);

  return (
    <Wallets
      selected={selected}
      onChange={change}
      providers={[
        ...Array.from(DEFAULT_WALLET_PROVIDERS),
        {
          name: `Custom Wallet 1`,
          icon: <Icon.Wallet />,
          href: '#',
          description: 'Some description...',
        },
        {
          name: `Custom Wallet 2`,
          icon: <Icon.Wallet />,
          href: '#',
          description: 'Some really really really really really really long description...',
        },
      ]}
      columns={cols}
      data-testid="wallets"
    />
  );
};
ResponsiveWithDescription.decorators = decorators;

const StyledModal = styled(Modal)`
  @media (min-width: ${em(SIZES.md)}) {
    width: ${em(576)};
    max-width: none;
  }
`;

export const InsideModal = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  return (
    <StyledModal open={true}>
      <Modal.Header title="Wallets" />
      <Modal.Content>
        <Wallets
          selected={selected}
          onChange={change}
          providers={[
            'Trust Wallet',
            'Binance Chain Wallet',
            'MetaMask',
            'Math Wallet',
            'Ledger',
            'TokenPocket',
            {
              name: `Custom Wallet`,
              icon: <Icon.Wallet />,
              href: '#',
            },
          ]}
          columns={4}
        />
      </Modal.Content>
    </StyledModal>
  );
};
