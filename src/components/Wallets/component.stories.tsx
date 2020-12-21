import React, { useCallback, useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { WalletProvider, Wallets } from './';
import { DEFAULT_WALLET_PROVIDERS } from './useWalletProviders';

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
      />
    </>
  );
};

export const SetNumberOfColumns = () => {
  return (
    <>
      <Wallets
        onChange={() => {}}
        providers={Array.from(DEFAULT_WALLET_PROVIDERS)}
        columns={4}
      />
    </>
  );
};
