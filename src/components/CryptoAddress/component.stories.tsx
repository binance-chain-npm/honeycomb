import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { SIZES } from './styled';

import { CryptoAddress } from './';

export default {
  component: CryptoAddress,
  decorators,
  title: `${Sections.Elements}/CryptoAddress`,
};

const ADDRESS = 'bnb000000000000000000000000000000000000000';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Default = () => <CryptoAddress value={ADDRESS} data-testid="crypto-address" />;

export const Sizes = () => (
  <Container>
    {SIZES.map((size) => (
      <div>
        <h3>{size}</h3>
        <CryptoAddress value={ADDRESS} size={size} />
      </div>
    ))}
  </Container>
);

export const Wrap = () => <CryptoAddress value={ADDRESS} wrap data-testid="crypto-address" />;

export const WithText = () => (
  <CryptoAddress value={ADDRESS} text="0xb00000...00000000" data-testid="crypto-address" />
);
