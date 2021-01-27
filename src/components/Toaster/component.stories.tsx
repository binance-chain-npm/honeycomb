import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Variant } from '../../modules/themes/HoneycombThemeProvider';
import { Button } from '../Button';
import { Card } from '../Card';
import { Dropdown } from '../Dropdown';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Toast } from '../Toast';

import { Toaster, toast } from './';

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
  toast(
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
          toast(
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
          toast(
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
          toast(
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

export const WithCustomIcon = () => (
  <>
    <Toaster position="top-right" />
    <Button variant="primary" onClick={makeToast}>
      Toast
    </Button>
  </>
);

export const WithComplexItems = () => (
  <>
    <Toaster position="top-right" />
    <Button
      variant="primary"
      onClick={() =>
        toast(
          <Toast icon={<Toast.Icon.Success />}>
            <Container>
              <div style={{ fontWeight: 'bold' }}>Limit Buy Order Created</div>
              <div>You have successfully created a limit order to buy 0.1 BTC</div>
            </Container>
          </Toast>,
        )
      }
    >
      Toast
    </Button>
  </>
);

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
    <Toaster position="top-right" style={{ marginTop: 'calc(4em + 12px)' }} />
  </>
);

export const WithTheme = () => {
  const [selected, setSelected] = useState<Variant>('light');

  return (
    <HoneycombThemeProvider variant={selected}>
      <Toaster position="top-right" />
      <Card>
        <Dropdown target={<Dropdown.DefaultTarget>With {selected} theme</Dropdown.DefaultTarget>}>
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
