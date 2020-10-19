import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Orientation, Styled } from './styled';

import { Steps } from '.';

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
      if (React.isValidElement<React.ComponentPropsWithoutRef<typeof Steps.Item>>(it)) {
        const itemKey = `item-${index}`;
        const connectorKey = `connector-${index}`;

        return [
          <Steps.Item
            key={itemKey}
            {...it.props}
            active={index === activeStep}
            completed={index < activeStep}
            data-testid={buildTestId(itemKey)}
          />,
          index !== children.length - 1 ? (
            <Steps.Connector
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

      return [it];
    });

    return res;
  }, [activeStep, orientation, otherProps.children, theme.honeycomb.size.normal, buildTestId]);

  return (
    <Styled {...otherProps} orientation={orientation} data-testid={buildTestId()}>
      {steps}
    </Styled>
  );
};

Component.displayName = 'Steps';
