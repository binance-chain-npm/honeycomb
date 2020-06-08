import React from 'react';

import { Sections } from '../../modules/sections';

import { BuyWithMoonPay } from './';

export default {
  title: `${Sections.Elements}|BuyWithMoonPay`,
};

export const Default = () => (
  <BuyWithMoonPay.Provider mode="test" apiKey="pk_test_OZksbXGh4UvoO9zxDKS9IpbGVSZke4h">
    <BuyWithMoonPay address="tbnb1l4awfmyyfsgmam7r2k6uke2v73smmxsgvlf4u5" />
  </BuyWithMoonPay.Provider>
);
