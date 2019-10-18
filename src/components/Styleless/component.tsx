import React, { forwardRef } from 'react';

export type Props = React.HTMLAttributes<HTMLElement> & {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};

export const Component = forwardRef<HTMLElement, Props>((props: Props, ref) => {
  const { tag, ...otherProps } = props;
  return React.createElement(tag, { ...otherProps, ref });
});

Component.displayName = 'Styleless';
