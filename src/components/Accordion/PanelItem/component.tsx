import React, { useMemo } from 'react';
import { animated, useTransition } from 'react-spring';

import { HtmlTag } from '../../../modules/html-tag';
import { Testable, useBuildTestId } from '../../../modules/test-ids';

import { Styled } from './styled';

export type Panel = {
  target: React.ReactNode;
  children?: React.ReactNode;
  htmlTag?: HtmlTag;
};

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'target'> &
  Panel &
  Testable & {
    index: number;
    activePanel: number;
    onChange: (index: number) => void;
  };

export const Component = ({
  target,
  children,
  activePanel,
  index,
  htmlTag,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const isActive = useMemo(() => activePanel === index, [activePanel, index]);
  const boxTransitions = useTransition(isActive ? children : null, null, {
    from: { opacity: 0, maxHeight: '0px' },
    enter: { opacity: 1, maxHeight: '1000px' },
    leave: { opacity: 0, maxHeight: '0px' },
  });

  return (
    <Styled {...otherProps} as={htmlTag as any} data-testid={buildTestId()}>
      <div onClick={() => onChange(index)} data-testid={buildTestId('target')}>
        {target}
      </div>
      {children &&
        boxTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                data-testid={buildTestId('children')}
                {...otherProps}
              >
                {children}
              </animated.div>
            ),
        )}
    </Styled>
  );
};

Component.displayName = 'PanelItem';
