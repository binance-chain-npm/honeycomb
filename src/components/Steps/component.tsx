import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { Context as ItemContext } from './Item/context';
import { Orientation, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    activeStep: number;
    children: React.ReactNode;
    orientation: Orientation;
  };

export const Component = ({
  activeStep,
  orientation,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const context = useMemo(() => ({ orientation }), [orientation]);

  const steps = useMemo(() => {
    const children = React.Children.toArray(otherProps.children);

    return children.map((it, index) => {
      return (
        <ItemContext.Provider
          key={index}
          value={{
            active: index === activeStep,
            completed: index < activeStep,
          }}
        >
          {it}
        </ItemContext.Provider>
      );
    });
  }, [activeStep, otherProps.children]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      <Context.Provider value={context}>{steps}</Context.Provider>
    </Styled>
  );
};

Component.displayName = 'Steps';
