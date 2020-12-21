import React, { useCallback, useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

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
        providers={[
          'Binance Chain Wallet',
          'Ledger',
          'Math Wallet',
          'MetaMask',
          'TokenPocket',
          'Trust Wallet',
        ]}
      />
    </>
  );
};
