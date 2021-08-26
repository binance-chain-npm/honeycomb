import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Context } from '../context';

import { Footer } from './styled';

export type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({ ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: parentTestId ? `${parentTestId}.footer` : undefined,
  });

  return <Footer {...otherProps} data-testid={buildTestId()} />;
};

Component.displayName = 'Modal.Footer';
