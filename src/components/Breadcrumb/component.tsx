import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './Item/context';
import { Styled } from './styled';

export type Props = Testable & {
  children: React.ReactNode;
  className?: string;
};

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId();

  const breadcrumbs = useMemo(() => {
    const children = React.Children.toArray(otherProps.children);

    return children.map((it, index) => {
      return (
        <Context.Provider
          key={index}
          value={{
            active: index === children.length - 1,
          }}
        >
          {it}
        </Context.Provider>
      );
    });
  }, [otherProps.children]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {breadcrumbs}
    </Styled>
  );
};

Component.displayName = 'Breadcrumbs';
