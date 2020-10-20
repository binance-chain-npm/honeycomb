import React, { useCallback, useMemo } from 'react';
import { animated, useTransition } from 'react-spring';

import { HtmlTag } from '../../../modules/html-tag';
import { Testable, useBuildTestId } from '../../../modules/test-ids';

import { Styled } from './styled';

export type Panel = {
  element: React.ReactNode;
  children?: React.ReactNode;
  htmlTag?: HtmlTag;
};

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Panel &
  Testable & {
    index: number;
    activePanel: number;
    onChange: (index: number) => void;
  };

export const Component = ({
  element,
  children,
  activePanel,
  index,
  htmlTag,
  onChange,
  onClick,
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

  const click = useCallback(
    (evt: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
      try {
        onChange(index);
      } catch (e) {
        throw e;
      } finally {
        onClick?.(evt);
      }
    },
    [onChange, onClick],
  );

  return (
    <>
      <Styled
        {...otherProps}
        onClick={(evt: React.MouseEvent<HTMLElement, MouseEvent>) => click(evt, index)}
        as={htmlTag as any}
        data-testid={buildTestId()}
      >
        {element}
      </Styled>
      {children &&
        boxTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props} data-testid={buildTestId('children')}>
                {children}
              </animated.div>
            ),
        )}
    </>
  );
};

Component.displayName = 'PanelItem';
