import React from 'react';
import { ArgsTable, Subtitle } from '@storybook/addon-docs/blocks';

import { Tooltip } from '../../Tooltip';

import { DefaultTargetDocs } from './DefaultTarget';

export const docs = {
  page: () => (
    <>
      <Subtitle>
        The tooltip component is used for showing information when a user moves the mouse pointer
        over a target element.
      </Subtitle>
      <ArgsTable of={Tooltip} />

      <DefaultTargetDocs />
    </>
  ),
};
