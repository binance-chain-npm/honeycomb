import React from 'react';
import { useTheme } from 'styled-components';
import { em } from 'polished';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Icon } from '../../Icon';

import { Styled, Pulse } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    isActive?: boolean;
    isCompleted?: boolean;
    size?: number;
  };

export const Component = ({
  isActive,
  isCompleted,
  children,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const theme = useTheme();

  return (
    <Styled
      {...otherProps}
      isActive={!!isActive}
      isCompleted={!!isCompleted}
      data-testid={buildTestId()}
    >
      {isCompleted ? (
        <Icon.Tick fontSize={em(theme.honeycomb.size.tiny, theme.honeycomb.size.small)} />
      ) : (
        <>{children}</>
      )}
      {isActive && <Pulse />}
    </Styled>
  );
};

Component.displayName = 'Steps.Item';
