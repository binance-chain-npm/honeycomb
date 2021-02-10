import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Description, Heading } from '@storybook/addon-docs/blocks';

import { GoldLight } from '../../../modules/themes/themes/GoldLight';
import { Header } from '../../Header';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Row = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

type State = React.ComponentPropsWithoutRef<typeof Header.Account>['state'];

export const Account = () => {
  const account = ({ state }: { state: State }) => (
    <Header.Account
      icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}
      children={[
        {
          element: 'Account Item 1',
        },
        {
          element: 'Account Item 2',
        },
        {
          element: 'Account Item 3',
        },
      ]}
      pre="Connect"
      post={{
        address: 'bnb1...ur8v',
        network: 'Binance Smart Chain Test Network',
      }}
      pending="Pending"
      state={state}
      data-testid="account"
    />
  );

  return (
    <>
      <Heading>Header.Account</Heading>
      <Header
        logo={<Header.Logo />}
        nonCollapsible={[
          {
            element: account({ state: 'post' }),
            styled: true,
          },
        ]}
        data-testid="header"
      />
      <Description>
        Headers have a `Header.Account` helper component. This component is shows logged in state of
        the user using the `state` prop, which accepts values `"pre | post| pending"`.
      </Description>
      <Row>
        <Container>
          <Text size="reduced">Pre-login</Text>
          {account({ state: 'pre' })}
        </Container>
        <Container>
          <Text size="reduced">Post-login</Text>
          {account({ state: 'post' })}
        </Container>
        <Container>
          <Text size="reduced">Pending</Text>
          {account({ state: 'pending' })}
        </Container>
      </Row>
      <Description>`Header.Account` without `children` will have no cursor events.</Description>
      <Container>
        <Header.Account
          icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}
          pre={null}
          post={{
            address: 'bnb1...ur8v',
            network: 'Binance Smart Chain Test Network',
          }}
          pending={null}
          state="post"
        />
      </Container>
      <Description>This `Header.Account` has a custom `icon` and no `network`.</Description>
      <Container>
        <Header.Account
          icon={<Icon.WalletConnectColor />}
          pre={null}
          post={{
            address: 'bnb1...ur8v',
          }}
          pending={null}
          state="post"
        />
      </Container>
    </>
  );
};
