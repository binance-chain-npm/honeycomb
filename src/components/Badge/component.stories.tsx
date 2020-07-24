import React from 'react';

import { Sections } from '../../modules/sections';

import { Badge } from '.';

export default {
  title: `${Sections.Elements}/Badge`,
};

export const PrimaryBadge = () => (
  <Badge variant="primary" transparent="primary" data-testid="MyBadge">
    Inactive
  </Badge>
);

export const SuccessBadge = () => (
  <Badge variant="success" transparent="success" data-testid="MyBadge">
    Active
  </Badge>
);

export const WarningBadge = () => (
  <Badge variant="warning" transparent="success" data-testid="MyBadge">
    Inactive
  </Badge>
);

export const DangerBadge = () => (
  <Badge variant="danger" transparent="success" data-testid="MyBadge">
    Injail
  </Badge>
);

export const BuyBadge = () => (
  <Badge variant="success" transparent="success" data-testid="MyBadge">
    Buy
  </Badge>
);

export const SellBadge = () => (
  <Badge variant="danger" transparent="danger" data-testid="MyBadge">
    Sell
  </Badge>
);
