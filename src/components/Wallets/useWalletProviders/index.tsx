import React, { useMemo } from 'react';

import { ReactComponent as BinanceChainWallet } from './Logos/BinanceChainWallet.svg';
import { ReactComponent as Ledger } from './Logos/Ledger.svg';
import { ReactComponent as MathWallet } from './Logos/MathWallet.svg';
import { ReactComponent as MetaMask } from './Logos/MetaMask.svg';
import { ReactComponent as TokenPocket } from './Logos/TokenPocket.svg';
import { ReactComponent as TrustWallet } from './Logos/TrustWallet.svg';

export const DEFAULT_PROVIDERS = [
  'Binance Chain Wallet',
  'Ledger',
  'Math Wallet',
  'MetaMask',
  'TokenPocket',
  'Trust Wallet',
] as const;
export type DefaultWalletProvider = typeof DEFAULT_PROVIDERS[number];

export type WalletProvider = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export const useWalletProviders = () => {
  const binanceWalletUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      if (navigator?.userAgent.indexOf('Firefox') !== -1) {
        return 'https://addons.mozilla.org/en-US/firefox/addon/binance-chain';
      }
    }

    return 'https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp';
  }, []);

  return {
    providers: {
      /* eslint-disable prettier/prettier */
      'Binance Chain Wallet': {
        name: 'Binance Chain Wallet',
        icon: <BinanceChainWallet />,
        href: binanceWalletUrl,
      },
      'Ledger': {
        name: 'Ledger',
        icon: <Ledger />,
        href: 'https://www.ledger.com',
      },
      'Math Wallet': {
        name: 'Math Wallet',
        icon: <MathWallet />,
        href: 'https://mathwallet.org',
      },
      'MetaMask': {
        name: 'MetaMask',
        icon: <MetaMask />,
        href: 'https://metamask.io/index.html',
      },
      'TokenPocket': {
        name: 'TokenPocket',
        icon: <TokenPocket />,
        href: 'https://www.tokenpocket.pro',
      },
      'Trust Wallet': {
        name: 'Trust Wallet',
        icon: <TrustWallet />,
        href: 'https://trustwallet.com',
      },
      /* eslint-enable prettier/prettier */
    },
  };
};
