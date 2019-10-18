import React from 'react';

import { InlineSvg } from '../internal/InlineSvg';

import { sourceFor, Src } from './source';

export type Props = { className?: string; src: Src };

export const Component = (props: Props) => {
  return <InlineSvg className={props.className} src={sourceFor(props.src)} />;
};

Component.displayName = 'Icon';
