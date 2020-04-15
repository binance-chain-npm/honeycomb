import { useEffect, useContext } from 'react';

import { Breadcrumb, BreadcrumbContext } from '../context';

export const useAddBreadcrumbEffect = ({ label, href }: Pick<Breadcrumb, 'label' | 'href'>) => {
  const { addBreadcrumb, removeBreadcrumb } = useContext(BreadcrumbContext);

  if (!addBreadcrumb || !removeBreadcrumb) {
    throw new Error(
      'Breadcrumb context is broken. Have you added <BreadcrumbProvider /> to your tree?',
    );
  }

  useEffect(() => {
    const { id } = addBreadcrumb({ label, href });
    return () => removeBreadcrumb(id);
  }, [addBreadcrumb, removeBreadcrumb, label, href]);
};
