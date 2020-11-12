import React from 'react';

import { Sections } from '../../modules/sections';
import { useBuildTestId } from '../../modules/test-ids';
import { Button } from '../Button';

import { Loading } from './';

export default {
  component: Loading,
  title: `${Sections.Elements}/Loading`,
};

export const Default = () => <Loading />;

export const FillViewport = () => {
  const { buildTestId } = useBuildTestId();

  const id = buildTestId();

  return (
    id &&
    id.startsWith('light') && (
      <>
        <Button variant="primary">Button</Button>
        <Loading fillViewport />
      </>
    )
  );
};
