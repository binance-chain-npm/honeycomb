import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { em } from 'polished';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { Context } from '../context';

import { Context as ItemContext } from './context';
import { Styled, Pulse } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> & Testable;

export const Component = ({ children, 'data-testid': testId, ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: testId ? parentTestId : undefined,
  });
  const { active, completed } = useContext(ItemContext);
  const theme = useTheme();

  return (
    <Styled
      {...otherProps}
      active={!!active}
      completed={!!completed}
      data-testid={buildTestId(testId)}
    >
      {completed ? (
        <Icon.Tick fontSize={em(theme.honeycomb.size.tiny, theme.honeycomb.size.small)} />
      ) : (
        <>{children}</>
      )}
      {active && <Pulse />}
    </Styled>
  );
};

Component.displayName = 'Steps.Item';
