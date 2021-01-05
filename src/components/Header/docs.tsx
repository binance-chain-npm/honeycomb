import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Title, Description, ArgsTable, Heading, Subheading } from '@storybook/addon-docs/blocks';

import { GlobalStyles } from '../../modules/core';
import { HoneycombThemeProvider } from '../../modules/themes';
import { Table } from '../Table';

import { Header } from './';

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  } as const,
  {
    Header: 'Type',
    accessor: 'type',
  } as const,
  {
    Header: 'Default',
    accessor: 'default',
  } as const,
  {
    Header: 'Description',
    accessor: 'description',
  } as const,
];

const DocsTable = styled(Table)`
  tr td:first-child {
    width: 20%;
  }

  tr td:nth-child(2) {
    width: 20%;
  }

  tr td:nth-child(3) {
    width: 15%;
  }

  code {
    font-family: monospace;
    padding: ${em(3)} ${em(5)};
    margin: 0 ${em(3)};
    border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
    background-color: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
  }
`;

const childrenProp = {
  name: 'children',
  type: <code>HeaderChildItem[]</code>,
  default: '',
  description: 'The content of the header item.',
};

const elementProp = {
  name: 'element',
  type: <code>node</code>,
  default: '',
  description: 'The content of the header item.',
};

const styledProp = {
  name: 'styled',
  type: <code>boolean</code>,
  default: <code>false</code>,
  description: (
    <>
      If <code>true</code>, the element will be rendered as-is with no styling applied by the header
      component.
    </>
  ),
};

export const docs = {
  page: () => (
    <HoneycombThemeProvider variant="light">
      <GlobalStyles />
      <Title />
      <Description>
        The header component is used for navigation on a site. It is designed to be versatile and
        responsive, rendering a full menu on large screens and collapsing into a drawer on small
        screens.
      </Description>
      <Heading>Props</Heading>
      <ArgsTable of={Header} />

      <Subheading>HeaderItem</Subheading>
      <Description>An item in the header.</Description>
      <DocsTable
        data={[
          childrenProp,
          elementProp,
          styledProp,
        ]}
        columns={columns}
      />

      <Subheading>HeaderChildItem</Subheading>
      <Description>
        A child of an item in the header. These will be rendered in a `Dropdown` component internally.
      </Description>
      <DocsTable
        data={[
          {
            ...elementProp,
            description: 'The content of the header child item.',
          },
          {
            name: 'label',
            type: <code>node</code>,
            default: '',
            description: 'The content of the header item.',
          },
          styledProp,
        ]}
        columns={columns}
      />

      <Subheading>NonCollapsibleHeaderItem</Subheading>
      <Description>
        A header that does not collapse automatically based on screen width.
      </Description>
      <DocsTable
        data={[
          elementProp,
          {
            name: 'label',
            type: <code>node</code>,
            default: '',
            description: 'The content of the header item.',
          },
          styledProp,
        ]}
        columns={columns}
      />
    </HoneycombThemeProvider>
  ),
};
