import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { SIZES } from '../internal/useWindowSize';
import { Modal } from '../Modal';

import { DEFAULT_WALLET_PROVIDERS } from './useWalletProviders';

import { Wallets } from './';

type WalletProvider = React.ComponentPropsWithoutRef<typeof Wallets>['selected'];

export default {
  component: Wallets,
  title: `${Sections.Elements}/Wallets`,
};

export const Default: Story = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  return (
    <Wallets
      selected={selected}
      onChange={change}
      providers={Array.from(DEFAULT_WALLET_PROVIDERS)}
      data-testid="wallets"
    />
  );
};
Default.decorators = decorators;

export const WithCustomNumberOfColumns: Story = () => {
  return (
    <Wallets onChange={() => {}} providers={Array.from(DEFAULT_WALLET_PROVIDERS)} columns={4} />
  );
};
WithCustomNumberOfColumns.decorators = decorators;

export const WithCustomWalletProvider: Story = () => {
  const wallets = new Array(5).fill(null).map((_, index) => ({
    name: `Custom Wallet ${index + 1}`,
    icon: <Icon.Wallet />,
    href: '#',
  }));

  return (
    <Wallets
      onChange={() => {}}
      providers={['Binance Chain Wallet', ...wallets]}
      columns={4}
      data-testid="wallets"
    />
  );
};
WithCustomWalletProvider.decorators = decorators;

export const WithDescription: Story = () => {
  return (
    <Wallets
      onChange={() => {}}
      providers={[
        ...Array.from(DEFAULT_WALLET_PROVIDERS),
        {
          name: `Custom Wallet`,
          icon: <Icon.Wallet />,
          href: '#',
          description: 'Some description...',
        },
        {
          name: `Custom Wallet`,
          icon: <Icon.Wallet />,
          href: '#',
          description: 'Some really really really really really really long description...',
        },
      ]}
      columns={4}
    />
  );
};
WithDescription.decorators = decorators;

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
