import { useEffect, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Breadcrumb, BreadcrumbContext } from '../context';

export const useAddBreadcrumbEffect = ({ label }: Pick<Breadcrumb, 'label'>) => {
  const { addBreadcrumb, removeBreadcrumb } = useContext(BreadcrumbContext);
  const { url } = useRouteMatch();

  if (!addBreadcrumb || !removeBreadcrumb) {
    throw new Error(
      'Breadcrumb context is broken. Have you added <BreadcrumbProvider /> to your tree?',
    );
  }

  useEffect(() => {
    const { id } = addBreadcrumb({ label, href: url });
    return () => removeBreadcrumb(id);
  }, [addBreadcrumb, removeBreadcrumb, label, url]);
};
