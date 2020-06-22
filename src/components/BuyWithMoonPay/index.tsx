import { Component } from './component';
import { Provider } from './context';

export const BuyWithMoonPay = Component as typeof Component & {
  Provider: typeof Provider;
};

export { useMoonPayUrl } from './useMoonPayUrl';

BuyWithMoonPay.Provider = Provider;
