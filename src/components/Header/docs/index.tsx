import React from 'react';
import { ArgsTable, Description, Source, Subtitle } from '@storybook/addon-docs/blocks';

import { DocsPropHeading } from '../../internal/DocsPropHeading';
import { DocsTable } from '../../internal/DocsTable';
import { Header } from '../../Header';

import { AccountDocs } from './Account';

export const docs = {
  page: () => (
    <>
      <Subtitle>
        The header component is used for navigation on a site. It is designed to be versatile and
        responsive, rendering a full menu on large screens and collapsing into a drawer on small
        screens.
      </Subtitle>
      <ArgsTable of={Header} />

      <DocsPropHeading>HeaderItem</DocsPropHeading>
      <Description>An item in the header.</Description>
      <DocsTable
        data={[
          {
            name: (
              <>
                children
                <DocsTable.Asterisk />
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
                <DocsTable.Asterisk />
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
            description: 'The HTML tag to cast this element into.',
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
      />
      <Description>
        Header items also accept most HTML attributes as props. This means we can make a header item
        any HTML tag, with any HTML attributes, like this:
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

      <DocsPropHeading>HeaderChildItem</DocsPropHeading>
      <Description>
        A child of an item in the header. These will be rendered in a `Dropdown` component
        internally.
      </Description>
      <Description>All `HeaderItem` props, except `children`.</Description>
      <Description>All `ListItem` props.</Description>
      <DocsTable
        data={[
          {
            name: 'label',
            type: <code>node</code>,
            default: '',
            description: 'The label for this header child item.',
          },
        ]}
      />

      <DocsPropHeading>NonCollapsibleHeaderItem</DocsPropHeading>
      <Description>
        A header that does not collapse automatically based on screen width.
      </Description>
      <Description>All `HeaderItem` props.</Description>
      <DocsTable
        data={[
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
      />

      <AccountDocs />
    </>
  ),
};
