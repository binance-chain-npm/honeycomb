import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Subheading,
} from '@storybook/addon-docs/blocks';

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

const Asterisk = styled.span`
  ::before {
    content: ' *';
    color: ${({ theme }) => theme.honeycomb.color.danger.normal};
  }
`;

export const docs = {
  page: () => (
    <>
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
          {
            name: <>All HTML attributes.</>,
          },
          {
            name: (
              <>
                children
                <Asterisk />
              </>
            ),
            type: <code>HeaderChildItem[]</code>,
            default: '',
            description: 'The content of the header item.',
          },
          {
            name: 'disabled',
            type: <code>boolean</code>,
            default: <code>false</code>,
            description: (
              <>
                If <code>true</code>, the element will be unusable.
              </>
            ),
          },
          {
            name: (
              <>
                element
                <Asterisk />
              </>
            ),
            type: <code>node</code>,
            default: '',
            description: 'The content of the header item.',
          },
          {
            name: 'htmlTag',
            type: <code>HTMLAttribute</code>,
            default: '',
            description: 'The HTML tag to cast this node into.',
          },
          {
            name: 'styled',
            type: <code>boolean</code>,
            default: <code>false</code>,
            description: (
              <>
                If <code>true</code>, the element will be rendered as-is with no styling applied by
                the header component.
              </>
            ),
          },
        ]}
        columns={columns}
      />
      <Description>
        Header items also accept most HTML attributes as props. This means we can make a header item
        any HTML tag, with any HTML attributes.
      </Description>
      <Source
        code={`
<Header
  left={[
    {
      element: 'Link',
      htmlTag: 'a',
      href: '#',
      target: '_blank',
    },
  ]}
/>
      `}
      />

      <Subheading>HeaderChildItem</Subheading>
      <Description>
        A child of an item in the header. These will be rendered in a `Dropdown` component
        internally.
      </Description>
      <DocsTable
        data={[
          {
            name: (
              <>
                All <code>HeaderItem</code> props, except <code>children</code>.
              </>
            ),
          },
          {
            name: (
              <>
                All <code>ListItem</code> props.
              </>
            ),
          },
          {
            name: 'label',
            type: <code>node</code>,
            default: '',
            description: 'The label for this header child item.',
          },
        ]}
        columns={columns}
      />

      <Subheading>NonCollapsibleHeaderItem</Subheading>
      <Description>
        A header that does not collapse automatically based on screen width.
      </Description>
      <DocsTable
        data={[
          {
            name: (
              <>
                All <code>HeaderItem</code> props.
              </>
            ),
          },
          {
            name: 'collapseOn',
            type: (
              <>
                <code>sm</code> | <code>md</code>
              </>
            ),
            default: '',
            description:
              'If specified, the non-collapsible will be collapsed when the screen width is smaller than the specified width.',
          },
        ]}
        columns={columns}
      />

      <Stories />
    </>
  ),
};
