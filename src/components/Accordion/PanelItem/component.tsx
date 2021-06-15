import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';

import { Content, Styled } from './styled';

export type Panel = {
  element: React.ReactNode;
  children?: React.ReactNode;
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
  onChange,
  onClick,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const active = useMemo(() => activePanel === index, [activePanel, index]);

  const style = useMemo(() => {
    return {
      height: active ? `${height}px` : 0,
    };
  }, [active, height]);

  useEffect(() => {
    if (!contentRef.current) return;

    let timeoutId: number | undefined = undefined;

    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      setHeight(contentRef.current?.scrollHeight ?? 0);
    }, 150);
  }, []);

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

  const panel = useMemo(() => {
    const it = element as React.ReactElement;
    return (
      <it.type
        {...it.props}
        onClick={(evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
          click(evt, index);
          it.props.onClick?.();
        }}
      />
    );
  }, [click, element, index]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {panel}
      {children && (
        <Content ref={contentRef} style={style} data-testid={buildTestId('children')}>
          {children}
        </Content>
      )}
    </Styled>
  );
};

Component.displayName = 'PanelItem';
