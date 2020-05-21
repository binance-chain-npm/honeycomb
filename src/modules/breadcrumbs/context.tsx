import { createContext } from 'react';

export type Breadcrumb = { id: string; label: string; href: string };

export interface IBreadcrumbContext {
  breadcrumbs: Breadcrumb[];
  addBreadcrumb?: (param: Pick<Breadcrumb, 'href' | 'label'>) => Breadcrumb;
  removeBreadcrumb?: (id: string) => void;
}

export const BreadcrumbContext = createContext<IBreadcrumbContext>({ breadcrumbs: [] });
