import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Variant } from '../../modules/themes/HoneycombThemeProvider';
import { Button } from '../Button';
import { Card } from '../Card';
import { Dropdown } from '../Dropdown';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Code } from '../internal/Docs';
import { Text } from '../Text';
import { createToast, dismissToast, Toast } from '../Toast';

import { Toaster } from './';

export default {
  component: Toaster,
  title: `${Sections.Elements}/Toaster`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const CONTENT = 'Some content...';

const makeToast = () =>
  createToast(
    <Toast icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}>
      {CONTENT}
    </Toast>,
  );

export const Default = () => (
  <>
    <Toaster autoClose={false} />
    <Container>
      <Button
        variant="success"
        onClick={() =>
          createToast(
            <Toast icon={<Toast.Icon.Success />} data-testid="success-toast">
              {CONTENT}
            </Toast>,
          )
        }
        data-testid="success-btn"
      >
        Success
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          createToast(
            <Toast icon={<Toast.Icon.Warning />} data-testid="warning-toast">
              {CONTENT}
            </Toast>,
          )
        }
        data-testid="warning-btn"
      >
        Warning
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          createToast(
            <Toast icon={<Toast.Icon.Danger />} data-testid="danger-toast">
              {CONTENT}
            </Toast>,
          )
        }
        data-testid="danger-btn"
      >
        Danger
      </Button>
    </Container>
  </>
);

export const Variants = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > *:not(:last-child) {
      margin-bottom: ${({ theme }) => em(theme.honeycomb.size.tiny)};
    }
  `;

  const Hr = styled.hr`
    opacity: 0.1;
  `;

  useEffect(() => {
    createToast(
      <Toast icon={<Icon.BinanceChain color={GoldLight.honeycomb.color.primary.normal} />}>
        Custom icon.
      </Toast>,
    );
    createToast(
      <Toast icon={<Toast.Icon.Success />}>
        <Container>
          <Text size="normal" alignSelf="start" weight="bold">
            A Title
          </Text>
          <div>
            <Hr />
          </div>
          <div>
            <Hr />
          </div>
          <div>
            <Hr />
          </div>
        </Container>
      </Toast>,
    );
    createToast(<Toast icon={<Toast.Icon.Warning />}>Without close button.</Toast>, {
      showCloseButton: false,
    });
    createToast(
      <Toast icon={<Toast.Icon.Danger />}>
        <Code>size="reduced"</Code>
      </Toast>,
      {
        size: 'reduced',
      },
    );
    createToast(
      <Toast icon={<Icon.Binance color={GoldLight.honeycomb.color.primary.normal} />}>
        <Code>position="bottom-left"</Code>
      </Toast>,
      {
        position: 'bottom-left',
      },
    );
  }, []);

  return <Toaster autoClose={false} position="top-right" />;
};

export const WithCallback = () => (
  <>
    <Toaster position="top-right" />
    <Button
      variant="primary"
      onClick={() =>
        createToast(<Toast icon={<Toast.Icon.Success />}>{CONTENT}</Toast>, {
          onOpen: () => action('open')(),
          onClose: () => action('close')(),
        })
      }
    >
      Toast
    </Button>
  </>
);

const StyledToaster = styled(Toaster)`
  transform: translateY(calc(4em + 12px));
`;

export const UnderComponent = () => (
  <>
    <Header
      logo={<Header.Logo />}
      left={[
        {
          element: (
            <Button variant="primary" onClick={makeToast}>
              Toast
            </Button>
          ),
        },
      ]}
    />
    <StyledToaster position="top-right" />
  </>
);

export const WithTheme = () => {
  const [selected, setSelected] = useState<Variant>('light');

  return (
    <HoneycombThemeProvider variant={selected}>
      <Toaster position="top-right" />
      <Card>
        <Dropdown target={<Dropdown.DefaultTarget>{selected}</Dropdown.DefaultTarget>}>
          {['accent', 'dark', 'light'].map((it) => (
            <Dropdown.Item
              key={it}
              onClick={() => {
                setSelected(it as Variant);
                makeToast();
              }}
              selected={selected === it}
            >
              {it}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Card>
    </HoneycombThemeProvider>
  );
};

export const DismissToast = () => {
  const [toastId, setToastId] = useState<React.ReactText>();

  return (
    <>
      <Toaster autoClose={false} position="top-right" />
      <Container>
        <Button
          variant="primary"
          onClick={() => {
            createToast(
              <Toast icon={<Toast.Icon.Success />}>
                This toast has a custom ID that we can use to dismiss it.
              </Toast>,
              {
                toastId: 'toast',
              },
            );
            setToastId(
              createToast(
                <Toast icon={<Toast.Icon.Success />}>
                  <Code>createToast</Code> returns a generated ID that we can also use.
                </Toast>,
              ),
            );
          }}
          disabled={!!toastId}
        >
          Create
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            dismissToast({ toastId: 'toast' });
            dismissToast({ toastId: toastId as React.ReactText });
            setToastId(undefined);
          }}
          disabled={!toastId}
        >
          Dismiss
        </Button>
      </Container>
    </>
  );
};
