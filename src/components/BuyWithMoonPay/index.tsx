import { MoonPayContextProvider } from '../../modules/moonpay';

import { Component } from './component';

export const BuyWithMoonPay = Component as typeof Component & {
  Provider: typeof MoonPayContextProvider;
};

BuyWithMoonPay.Provider = MoonPayContextProvider;
