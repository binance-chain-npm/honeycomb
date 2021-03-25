import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { Context as ItemContext } from './Item/context';
import { Styled } from './styled';

export type Props = Testable & {
  children: React.ReactNode;
  className?: string;
};

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ testId }), [testId]);

  const breadcrumbs = useMemo(() => {
    const children = React.Children.toArray(otherProps.children);

    return children.map((it, index) => {
      return (
        <ItemContext.Provider
          key={index}
          value={{
            active: index === children.length - 1,
          }}
        >
          {it}
        </ItemContext.Provider>
      );
    });
  }, [otherProps.children]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <Context.Provider value={context}>{breadcrumbs}</Context.Provider>
    </Styled>
  );
};

Component.displayName = 'Breadcrumbs';
