import React, { useMemo, useState } from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Breadcrumb } from './';

export default {
  component: Breadcrumb,
  decorators,
  title: `${Sections.Elements}/Breadcrumb`,
};

const map: { [key: string]: string } = {
  '/': 'Home',
  '/page-a': 'Page A',
  '/page-b': 'Page B',
  '/page-c': 'Page C',
};

export const Default = () => {
  const [page, setPage] = useState('Page C');

  const breadcrumbs = useMemo(() => {
    const res: React.ReactNode[] = [];
    let index = 0;
    for (const [key, value] of Object.entries(map)) {
      res.push(
        <Breadcrumb.Item
          key={key}
          href={key}
          onClick={() => setPage(value)}
          data-testid={`${index}`}
        >
          {value}
        </Breadcrumb.Item>,
      );
      if (value === page) break;
      index++;
    }
    return res;
  }, [page]);

  const buttons = useMemo(() => {
    const res: React.ReactNode[] = [];
    for (const [key, value] of Object.entries(map)) {
      res.push(
        <button key={key} onClick={() => setPage(value)}>
          Go to {value}
        </button>,
      );
    }
    return res;
  }, []);

  return (
    <>
      <Breadcrumb data-testid="breadcrumbs">{breadcrumbs}</Breadcrumb>
      <h1>{page}</h1>
      {buttons}
    </>
  );
};
