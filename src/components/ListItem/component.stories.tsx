import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';
import { SolidAvatar } from '../SolidAvatar';

import { ListItem } from './';

export default {
  component: ListItem,
  title: `${Sections.Elements}/ListItem`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const StyledListItem = styled(ListItem)`
  ${ListItem.Right} {
    font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
  }
`;

export const Default = () => (
  <>
    <StyledListItem right="a value" showCaretRight>
      With caret pointing right
    </StyledListItem>
    <StyledListItem right="a value" showCaretRight disabled>
      Disabled
    </StyledListItem>
    <ListItem selected>Selected</ListItem>
    <ListItem
      left={
        <Button variant="secondary" size="increased" shape="fit">
          Left
        </Button>
      }
      right={
        <Button variant="secondary" size="increased" shape="fit">
          Right
        </Button>
      }
    >
      <Button variant="primary" size="huge" shape="fit">
        Custom
      </Button>
    </ListItem>
    <ListItem
      left={
        <div style={{ fontSize: '2em' }}>
          <SolidAvatar value="a" initial="a" />
        </div>
      }
      right={
        <Button variant="secondary" size="increased" shape="fit">
          Right
        </Button>
      }
    >
      0x77f2f5db2f2195b5461a0a7504b3acbac7ff9bad
    </ListItem>
    <ListItem interactive={false} htmlTag="div">
      Non-interactive
    </ListItem>
    <ListItem showBorder={false}>No border</ListItem>
  </>
);
