import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Description, Heading } from '@storybook/addon-docs/blocks';

import { Icon } from '../../Icon';
import { Code, DocsComponentContainer, DocsTable } from '../../internal/Docs';
import { Tooltip } from '../../Tooltip';

export const Container = styled.div`
  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const DefaultTarget = () => (
  <Container>
    <Tooltip arrow content="Targets can have an icon, text, or any node.">
      <Tooltip.DefaultTarget shape="fit">
        <Icon.InfoCircle />
      </Tooltip.DefaultTarget>
    </Tooltip>
  </Container>
);

export const DefaultTargetDocs = () => (
  <>
    <Heading>Tooltip.DefaultTarget</Heading>
    <Description>
      Tooltips have a `Tooltip.DefaultTarget` helper component. This is useful for a target that
      looks like text, but is highlighted on hover.
    </Description>

    <DocsComponentContainer>
      <DefaultTarget />
    </DocsComponentContainer>

    <DocsTable
      data={[
        {
          name: (
            <>
              children
              <DocsTable.Asterisk />
            </>
          ),
          type: <Code>node</Code>,
          default: '',
          description: 'The content of the target.',
        },
        {
          name: 'shape',
          type: (
            <>
              <Code>fill</Code> | <Code>fit</Code>
            </>
          ),
          default: <Code>fill</Code>,
          description: 'The shape of the target element.',
        },
      ]}
    />
  </>
);
