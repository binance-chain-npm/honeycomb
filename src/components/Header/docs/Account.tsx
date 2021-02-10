import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Description, Heading } from '@storybook/addon-docs/blocks';

import { GoldLight } from '../../../modules/themes/themes/GoldLight';
import { Header } from '../../Header';
import { Icon } from '../../Icon';
import { DocsComponentContainer } from '../../internal/DocsComponentContainer';
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

export const Account = ({ state }: { state: State }) => (
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

type State = React.ComponentPropsWithoutRef<typeof Header.Account>['state'];

export const AccountDocs = () => (
  <>
    <Heading>Header.Account</Heading>
    <Description>
      Headers have a `Header.Account` helper component. This component is shows logged in state of
      the user using the `state` prop, which accepts values `"pre | post| pending"`.
    </Description>
    <DocsComponentContainer>
      <Header
        logo={<Header.Logo />}
        nonCollapsible={[
          {
            element: <Account state="post" />,
            styled: true,
          },
        ]}
      />
    </DocsComponentContainer>
    <Row>
      <Container>
        <Text size="reduced">Pre-login</Text>
        <Account state="pre" />
      </Container>
      <Container>
        <Text size="reduced">Post-login</Text>
        <Account state="post" />
      </Container>
      <Container>
        <Text size="reduced">Pending</Text>
        <Account state="pending" />
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
