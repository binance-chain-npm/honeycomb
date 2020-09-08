import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Testable } from '../../modules/test-ids';

const style: {
  main: React.CSSProperties;
  animate: React.CSSProperties;
} = {
  main: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    msTransformOrigin: '0 50%',
    WebkitTransformOrigin: '0 50%',
    OTransformOrigin: '0 50%',
    MozTransformOrigin: '0 50%',
    transformOrigin: '0 50%',
    fontSize: '50px',
    background: 'pink',
  },
  animate: {
    // msTransition: '-ms-transform 400ms',
    WebkitTransition: '-webkit-transform 400ms',
    OTransition: '-o-transform 400ms',
    MozTransition: '-moz-transform 400ms',
    transition: 'transform 400ms',
  },
};

export type Props = Testable & {
  className?: string;
  smooth?: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Component = ({
  smooth = false,
  value,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const [scale, setScale] = useState(1);

  const spanRef = useRef<HTMLSpanElement>(null);

  const getMaxWidth = () => spanRef.current?.parentElement?.offsetWidth || 0; // eslint-disable-line react-hooks/exhaustive-deps
  const getCurrentWidth = () => spanRef.current?.offsetWidth || 0; // eslint-disable-line react-hooks/exhaustive-deps

  const fixWidth = useCallback(() => {
    const maxWidth = getMaxWidth();
    const currentWidth = getCurrentWidth();

    if (currentWidth > 0) {
      if (currentWidth > maxWidth) {
        setScale(maxWidth / currentWidth);
      } else {
        setScale(1);
      }
    }
  }, [getMaxWidth, getCurrentWidth]);

  useEffect(() => {
    if (spanRef.current) {
      fixWidth();
    }
  }, [fixWidth]);

  const change = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      onChange?.(evt);
      fixWidth();
    },
    [fixWidth, onChange],
  );

  let scaleStyle;
  if (scale === 1) {
    scaleStyle = undefined;
  } else {
    const transformValue = `scale(${scale}, ${scale})`;
    scaleStyle = {
      msTransform: transformValue,
      WebkitTransform: transformValue,
      OTransform: transformValue,
      MozTransform: transformValue,
      transform: transformValue,
    };
  }
  const finalStyle = {
    ...style.main,
    ...(smooth ? style.animate : undefined),
    ...scaleStyle,
  };
  const finalStyleSpan = {
    ...style.main,
    // ...style.animate,
    ...scaleStyle,
    visible: 'hidden',
  };

  return (
    <>
      <span style={finalStyleSpan} ref={spanRef}>
        {value}
      </span>
      <input
        {...otherProps}
        data-testid={testId}
        style={finalStyle}
        value={value}
        onChange={change}
      />
    </>
  );
};

Component.displayName = 'DynamicTextInput';
