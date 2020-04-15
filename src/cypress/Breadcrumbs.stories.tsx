import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Sections } from '../modules/sections';
import { BreadcrumbProvider, useAddBreadcrumbEffect, useBreadcrumbs } from '../modules/breadcrumbs';

export default {
  title: `${Sections.Tests}|Breadcrumbs`,
};

const PageA = () => {
  const [show2, setShow2] = useState(false);
  useAddBreadcrumbEffect({ label: 'Page A' });
  return (
    <div data-testid="view.A">
      <h1>Page A</h1>
      <button onClick={() => setShow2(!show2)} data-testid="toggle.A1-A2">
        {show2 ? 'Go to A.1' : 'Go to A.2'}
      </button>
      {show2 ? <PageA2 /> : <PageA1 />}
    </div>
  );
};

const PageA1 = () => {
  useAddBreadcrumbEffect({ label: 'A.1' });
  return <h2 data-testid="view.A1">Page A.1</h2>;
};

const PageA2 = () => {
  useAddBreadcrumbEffect({ label: 'A.2' });
  return <h2 data-testid="view.A2">Page A.2</h2>;
};

const PageB = () => {
  useAddBreadcrumbEffect({ label: 'Page B' });
  return <h1 data-testid="view.B">Page B</h1>;
};

const Root = () => {
  const [showB, setShowB] = useState(false);
  return (
    <>
      <button onClick={() => setShowB(!showB)} data-testid="toggle.A-B">
        {showB ? 'Go to A' : 'Go to B'}
      </button>
      {showB ? <PageB /> : <PageA />}
    </>
  );
};

const RenderBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div>
      {breadcrumbs.map((it, index) => (
        <span key={it.id.toString()}>
          <span data-testid={`breadcrumb.${index}`}>{it.label}</span>
          {index < breadcrumbs.length - 1 && <span> > </span>}
        </span>
      ))}
    </div>
  );
};

export const Default = () => {
  return (
    <BreadcrumbProvider>
      <BrowserRouter>
        <RenderBreadcrumbs />
        <Root />
      </BrowserRouter>
    </BreadcrumbProvider>
  );
};
