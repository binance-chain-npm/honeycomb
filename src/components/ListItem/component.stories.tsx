import React from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { ListItem } from './';

export default {
  component: ListItem,
  title: `${Sections.Elements}/ListItem`,
};

export const Default = () => (
  <>
    <ListItem rightValue="a value" showCaretRight>
      With caret pointing right
    </ListItem>
    <ListItem rightValue="a value" showCaretRight disabled>
      Disabled
    </ListItem>
    <ListItem isSelected>Selected</ListItem>
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
  </>
);
