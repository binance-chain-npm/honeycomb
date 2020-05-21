import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { BreadcrumbContext, Breadcrumb, IBreadcrumbContext } from '../context';

export const BreadcrumbProvider = (props: { children?: React.ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  const [toAdd, setToAdd] = useState<Breadcrumb[]>([]);

  const addBreadcrumb = useCallback<NonNullable<IBreadcrumbContext['addBreadcrumb']>>((params) => {
    const id = nanoid();
    const breadcrumb = { ...params, id };

    setToAdd((state) => [...state, breadcrumb]);
    return breadcrumb;
  }, []);

  const removeBreadcrumb = useCallback<NonNullable<IBreadcrumbContext['removeBreadcrumb']>>(
    (id) => {
      setBreadcrumbs((state) => state.filter((it) => it.id !== id));
      setToAdd((state) => state.filter((it) => it.id !== id));
    },
    [],
  );

  useEffect(() => {
    if (toAdd.length <= 0) return;

    [...toAdd].reverse().forEach((it) => {
      setBreadcrumbs((state) => [...state, it]);
    });
    setToAdd([]);
  }, [toAdd]);

  const contextValue = useMemo<IBreadcrumbContext>(
    () => ({
      breadcrumbs,
      addBreadcrumb,
      removeBreadcrumb,
    }),
    [breadcrumbs, addBreadcrumb, removeBreadcrumb],
  );

  return (
    <BreadcrumbContext.Provider value={contextValue}>{props.children}</BreadcrumbContext.Provider>
  );
};
