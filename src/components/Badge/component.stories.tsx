import React from 'react';

import { Sections } from '../../modules/sections';

import { Badge } from '.';

export default {
  title: `${Sections.Elements}/Badge`,
};

export const PrimaryBadge = () => (
  <Badge variant="primary" data-testid="MyBadge">
    Inactive
  </Badge>
);

export const SuccessBadge = () => (
  <Badge variant="success" data-testid="MyBadge">
    Active
  </Badge>
);

export const WarningBadge = () => (
  <Badge variant="warning" data-testid="MyBadge">
    Inactive
  </Badge>
);

export const DangerBadge = () => (
  <Badge variant="danger" data-testid="MyBadge">
    Injail
  </Badge>
);

export const BuyBadge = () => (
  <Badge variant="buy" data-testid="MyBadge">
    Buy
  </Badge>
);

export const SellBadge = () => (
  <Badge variant="sell" data-testid="MyBadge">
    Sell
  </Badge>
);
