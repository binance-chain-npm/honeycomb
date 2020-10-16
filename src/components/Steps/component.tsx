import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Connector } from './Connector';
import { Item } from './Item';
import { Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    activeStep: number;
    children: React.ReactNode;
  };

export const Component = ({
  activeStep,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const steps = useMemo(() => {
    const children = React.Children.toArray(otherProps.children);

    const res = children.flatMap((it, index) => {
      if (React.isValidElement<{ isActive?: boolean; isCompleted?: boolean }>(it)) {
        return [
          <Item
            {...it.props}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            data-testid={buildTestId(`item-${index}`)}
          />,
          index !== children.length - 1 ? (
            <Connector data-testid={buildTestId(`connector-${index}`)} />
          ) : (
            undefined
          ),
        ];
      }

      return [];
    });

    return res;
  }, [activeStep, otherProps.children, buildTestId]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {steps}
    </Styled>
  );
};

Component.displayName = 'Steps';
