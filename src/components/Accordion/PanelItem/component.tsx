import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HtmlTag } from '../../../modules/html-tag';
import { Testable, useBuildTestId } from '../../../modules/test-ids';

import { Content, Styled } from './styled';

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
    let timeoutId: number | undefined = undefined;

    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      setHeight(contentRef.current!.scrollHeight);
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

  return (
    <Styled
      {...otherProps}
      onClick={(evt: React.MouseEvent<HTMLElement, MouseEvent>) => click(evt, index)}
      as={htmlTag as any}
      data-testid={buildTestId()}
    >
      {element}
      {children && (
        <Content ref={contentRef} style={style} data-testid={buildTestId('children')}>
          {children}
        </Content>
      )}
    </Styled>
  );
};

Component.displayName = 'PanelItem';
