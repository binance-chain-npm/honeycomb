import { Component } from './component';
import { Provider } from './context';

export const BuyWithMoonPay = Component as typeof Component & {
  Provider: typeof Provider;
};

BuyWithMoonPay.Provider = Provider;
