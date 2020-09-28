import React from 'react';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { Header } from '.';

export default {
  component: Header,
  title: `${Sections.Elements}/Header`,
};

export const Default = () => (
  <Header
    logo={
      <>
        <Icon.BinanceChain />
        &nbsp;Binance Chain
      </>
    }
    left={
      <>
        <Header.Item>Left Item</Header.Item>
        <Header.Dropdown target="Dropdown Item">
          <Header.Dropdown.Item>Item 1</Header.Dropdown.Item>
          <Header.Dropdown.Item htmlTag="a">Item 2</Header.Dropdown.Item>
          <Header.Dropdown.Divider />
          <Header.Dropdown.Item variant="accent">Item 3</Header.Dropdown.Item>
        </Header.Dropdown>
      </>
    }
    right={
      <>
        <Header.Item>Right Item</Header.Item>
        <Header.Dropdown target="Dropdown Item">
          <Header.Dropdown.Item>Item 1</Header.Dropdown.Item>
          <Header.Dropdown.Item htmlTag="a">Item 2</Header.Dropdown.Item>
          <Header.Dropdown.Divider />
          <Header.Dropdown.Item variant="accent">Item 3</Header.Dropdown.Item>
        </Header.Dropdown>
      </>
    }
  />
);
