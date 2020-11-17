import React, { useState } from 'react';

import { BreadcrumbProvider, useAddBreadcrumbEffect, useBreadcrumbs } from '../modules/breadcrumbs';
import { decorators } from '../modules/decorators';
import { Sections } from '../modules/sections';
import { useBuildTestId } from '../modules/test-ids';

export default {
  decorators,
  title: `${Sections.Elements}/Breadcrumbs`,
};

const PageA = () => {
  const { buildTestId } = useBuildTestId({ id: 'toggle' });
  const [show2, setShow2] = useState(false);
  useAddBreadcrumbEffect({ label: 'Page A', href: '/a' });

  return (
    <div data-testid="view.A">
      <h1>Page A</h1>
      <button onClick={() => setShow2(!show2)} data-testid={buildTestId('A1-A2')}>
        {show2 ? 'Go to A.1' : 'Go to A.2'}
      </button>
      {show2 ? <PageA2 /> : <PageA1 />}
    </div>
  );
};

const PageA1 = () => {
  useAddBreadcrumbEffect({ label: 'A.1', href: '/a1' });
  return <h2 data-testid="view.A1">Page A.1</h2>;
};

const PageA2 = () => {
  useAddBreadcrumbEffect({ label: 'A.2', href: '/a2' });
  return <h2 data-testid="view.A2">Page A.2</h2>;
};

const PageB = () => {
  useAddBreadcrumbEffect({ label: 'Page B', href: '/b' });
  return <h1 data-testid="view.B">Page B</h1>;
};

const Root = () => {
  const { buildTestId } = useBuildTestId({ id: 'toggle' });
  const [showB, setShowB] = useState(false);

  return (
    <>
      <button onClick={() => setShowB(!showB)} data-testid={buildTestId('A-B')}>
        {showB ? 'Go to A' : 'Go to B'}
      </button>
      {showB ? <PageB /> : <PageA />}
    </>
  );
};

const RenderBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const { buildTestId } = useBuildTestId({ id: 'breadcrumb' });

  return (
    <div>
      {breadcrumbs.map((it, index) => (
        <span key={it.id.toString()}>
          <span data-testid={buildTestId(`${index}`)}>{it.label}</span>
          {index < breadcrumbs.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export const Default = () => {
  return (
    <BreadcrumbProvider>
      <RenderBreadcrumbs />
      <Root />
    </BreadcrumbProvider>
  );
};
