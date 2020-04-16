import { useContext } from 'react';

import { BreadcrumbContext } from '../context';

export const useBreadcrumbs = () => useContext(BreadcrumbContext).breadcrumbs;
