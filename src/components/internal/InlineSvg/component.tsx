import React, { useMemo } from 'react';

import { Svg } from './Svg';

export type Props = {
  className?: string;
  src: string;
};

export const Component = (props: Props) => {
  const { viewBox, children } = useMemo(() => {
    const result = props.src.match(/<svg([^>]*)>(.*)<\/svg>/i);

    const attrs = result ? result[1] : '';
    const attrsResult = attrs.match(/viewBox="([^"]*)"/i);

    return {
      viewBox: attrsResult ? attrsResult[1] : undefined,
      children: result ? result[2] : undefined,
    };
  }, [props.src]);

  const dangerouslySetInnerHTML = useMemo(() => (children ? { __html: children } : undefined), [
    children,
  ]);
  return (
    <Svg
      className={props.className}
      viewBox={viewBox}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    />
  );
};

Component.displayName = 'InlineSvg';
