import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Connector } from './Connector';
import { Item } from './Item';
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
  const theme = useTheme();

  const steps = useMemo(() => {
    const children = React.Children.toArray(otherProps.children);

    const res = children.flatMap((it, index) => {
      if (React.isValidElement<{ isActive?: boolean; isCompleted?: boolean; size?: number }>(it)) {
        const itemKey = `item-${index}`;
        const connectorKey = `connector-${index}`;

        return [
          <Item
            key={itemKey}
            {...it.props}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            data-testid={buildTestId(itemKey)}
          />,
          index !== children.length - 1 ? (
            <Connector
              orientation={orientation}
              key={connectorKey}
              size={it.props.size ? it.props.size - theme.honeycomb.size.normal : undefined}
              data-testid={buildTestId(connectorKey)}
            />
          ) : (
            undefined
          ),
        ];
      }

      return [];
    });

    return res;
  }, [activeStep, orientation, otherProps.children, buildTestId]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      {steps}
    </Styled>
  );
};

Component.displayName = 'Steps';
