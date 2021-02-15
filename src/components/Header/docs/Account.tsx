import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Description, Heading } from '@storybook/addon-docs/blocks';

import { GoldLight } from '../../../modules/themes/themes/GoldLight';
import { Header } from '../../Header';
import { Icon } from '../../Icon';
import { DocsComponentContainer } from '../../internal/DocsComponentContainer';
import { DocsPropHeading } from '../../internal/DocsPropHeading';
import { DocsTable } from '../../internal/DocsTable';
import { Text } from '../../Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > *:first-child {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Row = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const StyledDocsComponentContainer = styled(DocsComponentContainer)`
  margin: ${({ theme }) => em(theme.honeycomb.size.increased)} 0;
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
      the user.
    </Description>
    <DocsPropHeading>HeaderItem</DocsPropHeading>
    <DocsTable
      data={[
        {
          name: 'children',
          type: <code>HeaderAccountChildItem[]</code>,
          default: '',
          description:
            'The dropdown content of the account. Actions for the account (e.g. log out) can go here.',
        },
        {
          name: (
            <>
              icon
              <DocsTable.Asterisk />
            </>
          ),
          type: <code>node</code>,
          default: '',
          description: 'The icon for account.',
        },
        {
          name: (
            <>
              pending
              <DocsTable.Asterisk />
            </>
          ),
          type: <code>node</code>,
          default: '',
          description: 'The content of the account when state="pending".',
        },
        {
          name: (
            <>
              post
              <DocsTable.Asterisk />
            </>
          ),
          type: <code>node</code>,
          default: '',
          description: 'The content of the account when state="post".',
        },
        {
          name: (
            <>
              pre
              <DocsTable.Asterisk />
            </>
          ),
          type: <code>node</code>,
          default: '',
          description: 'The content of the account when state="pre".',
        },
        {
          name: (
            <>
              state
              <DocsTable.Asterisk />
            </>
          ),
          type: (
            <>
              <code>pre</code> | <code>post</code> | <code>pending</code>
            </>
          ),
          default: '',
          description: 'The logged in state of the account',
        },
      ]}
    />
    <StyledDocsComponentContainer>
      <Header
        logo={<Header.Logo />}
        nonCollapsible={[
          {
            element: <Account state="post" />,
            styled: true,
          },
        ]}
      />
    </StyledDocsComponentContainer>
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
    <Row>
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
      <Header.Account
        icon={<Icon.WalletConnectColor />}
        pre={null}
        post={{
          address: 'bnb1...ur8v',
        }}
        pending={null}
        state="post"
      />
    </Row>
  </>
);
