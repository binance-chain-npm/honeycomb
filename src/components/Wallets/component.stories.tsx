import React, { useCallback, useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { ReactComponent as Wallet } from '../Icon/assets/Wallet.svg';

import { DEFAULT_WALLET_PROVIDERS } from './useWalletProviders';

import { WalletProvider, Wallets } from './';

export default {
  component: Wallets,
  decorators,
  title: `${Sections.Elements}/Wallets`,
};

export const Default = () => {
  const [selected, setSelected] = useState<WalletProvider>();

  const change = useCallback(({ provider }) => {
    setSelected(provider);
  }, []);

  return (
    <>
      <Wallets
        selected={selected}
        onChange={change}
        providers={Array.from(DEFAULT_WALLET_PROVIDERS)}
        data-testid="wallets"
      />
    </>
  );
};

export const WithCustomNumberOfColumns = () => {
  return (
    <>
      <Wallets onChange={() => {}} providers={Array.from(DEFAULT_WALLET_PROVIDERS)} columns={4} />
    </>
  );
};

export const WithCustomWalletProvider = () => {
  const wallets = new Array(5).fill(null).map((_, index) => ({
    name: `Custom Wallet ${index + 1}`,
    icon: <Wallet />,
    href: '#',
  }));

  return (
    <>
      <Wallets
        onChange={() => {}}
        providers={['Binance Chain Wallet', ...wallets]}
        columns={4}
        data-testid="wallets"
      />
    </>
  );
};
